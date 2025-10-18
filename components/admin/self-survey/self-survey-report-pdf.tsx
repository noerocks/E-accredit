import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { SurveyTeamType } from "@/lib/generated/prisma";
import {
  calculateAreaMean,
  calculateGrandMean,
  calculateWeightedAreaMean,
} from "@/lib/utils";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const SelfSurveyReportPDF = ({
  areaFolders,
  surveyName,
}: {
  areaFolders: AreaFolderDTO[];
  surveyName: string;
}) => {
  const grandWeightedMean = calculateGrandMean(
    areaFolders,
    SurveyTeamType.INTERNAL
  );
  const styles = StyleSheet.create({
    cover: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 40,
      backgroundColor: "#fff",
    },
    contentPage: {
      padding: 40,
      fontSize: 10,
      lineHeight: 1.6,
      backgroundColor: "#fff",
    },
    centeredColumn: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    reportTitle: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 15,
      textTransform: "uppercase",
      color: "#222",
    },
    reportSubtitle: {
      textAlign: "center",
      fontSize: 14,
      color: "#555",
      marginBottom: 25,
    },
    paragraph: {
      fontSize: 11,
      color: "#333",
      marginBottom: 8,
    },
    narrativeBlock: {
      marginTop: 15,
      marginBottom: 20,
      padding: 10,
      backgroundColor: "#f9f9f9",
      borderRadius: 5,
    },
    narrativeTitle: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 5,
      color: "#222",
    },
    letterhead: {
      marginBottom: 25,
    },
    areaTitle: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#222",
      marginBottom: 12,
      textTransform: "uppercase",
    },
    parameterBlock: {
      marginBottom: 20,
    },
    tableRow: {
      flexDirection: "row",
      borderBottomWidth: 0.3,
      borderBottomColor: "#aaa",
      backgroundColor: "#fff",
    },
    tableCell: {
      flex: 1,
      paddingVertical: 3,
      paddingHorizontal: 4,
      fontSize: 7,
      textAlign: "center",
      color: "#333",
    },
    tableHeaderCell: {
      flex: 1,
      paddingVertical: 4,
      paddingHorizontal: 4,
      fontSize: 8,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#f3f3f3",
      borderBottomWidth: 0.5,
      borderBottomColor: "#aaa",
      color: "#222",
    },
    areaMeanBlock: {
      marginTop: 15,
      marginBottom: 15,
      padding: 8,
      backgroundColor: "#eef1f5",
      borderRadius: 5,
    },
    areaMeanText: {
      fontSize: 11,
      fontWeight: "bold",
      color: "#222",
    },
  });

  return (
    <Document>
      <Page style={styles.cover}>
        <Image src={"/letterhead.png"} style={styles.letterhead} />
        <View style={styles.centeredColumn}>
          <Text style={styles.reportTitle}>Self Survey Report</Text>
          <Text style={styles.reportSubtitle}>{surveyName}</Text>
        </View>
        <Text style={styles.paragraph}>
          {new Date(Date.now()).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      </Page>

      {areaFolders
        .sort((a, b) => a.area.label.localeCompare(b.area.label))
        .map((areaFolder) => {
          const area = areaFolder.area;
          const areaMean = calculateAreaMean(
            areaFolder,
            SurveyTeamType.INTERNAL
          );
          const weight = area.weight;
          const weightedAreaMean = calculateWeightedAreaMean(
            areaFolder,
            SurveyTeamType.INTERNAL
          );
          const strengths = areaFolder.strengths.find(
            (s) => s.type === "SELF_SURVEY"
          );
          const weaknesses = areaFolder.weaknesses.find(
            (w) => w.type === "SELF_SURVEY"
          );
          const recommendations = areaFolder.recommendations.find(
            (r) => r.type === "SELF_SURVEY"
          );
          return (
            <Page key={area.id} style={styles.contentPage}>
              <Image src={"/letterhead.png"} style={styles.letterhead} />
              <Text
                style={styles.areaTitle}
              >{`${area.label}: ${area.description}`}</Text>

              {areaFolder.parameterFolders
                .sort((a, b) =>
                  a.parameter.label.localeCompare(b.parameter.label)
                )
                .map((parameterFolder) => {
                  const parameter = parameterFolder.parameter;
                  const evidences = parameterFolder.indicatorFolders.flatMap(
                    (indicator) => indicator.evidenceFiles
                  );
                  return (
                    <View key={parameter.id} style={styles.parameterBlock}>
                      <Text style={styles.paragraph}>
                        {`${parameter.label}: ${parameter.description}`}
                      </Text>
                      <View style={styles.tableRow}>
                        <Text style={styles.tableHeaderCell}>Indicator</Text>
                        <Text style={styles.tableHeaderCell}>Description</Text>
                        <Text style={styles.tableHeaderCell}>A</Text>
                        <Text style={styles.tableHeaderCell}>E</Text>
                        <Text style={styles.tableHeaderCell}>AE</Text>
                        <Text style={styles.tableHeaderCell}>Final Rating</Text>
                      </View>
                      {evidences
                        .sort((a, b) =>
                          a.indicator.label.localeCompare(b.indicator.label)
                        )
                        .map((evidence) => {
                          const indicator = evidence.indicator;
                          const adequacy = evidence.ratings
                            ? evidence.ratings.find(
                                (rating) =>
                                  rating.adequacy && rating.type === "INTERNAL"
                              )?.adequacy
                            : null;
                          const effectiveness = evidence.ratings
                            ? evidence.ratings.find(
                                (rating) =>
                                  rating.effectiveness &&
                                  rating.type === "INTERNAL"
                              )?.effectiveness
                            : null;
                          const NA = evidence.ratings
                            ? evidence.ratings.find(
                                (rating) =>
                                  rating.NA && rating.type === "INTERNAL"
                              )?.NA
                            : null;
                          const finalRate = evidence.ratings
                            ? evidence.ratings.find(
                                (rating) =>
                                  rating.finalRate && rating.type === "INTERNAL"
                              )?.finalRate
                            : null;

                          return (
                            <View style={styles.tableRow} key={indicator.id}>
                              <Text style={styles.tableCell}>
                                {indicator.label}
                              </Text>
                              <Text style={styles.tableCell}>
                                {indicator.description}
                              </Text>
                              <Text style={styles.tableCell}>
                                {adequacy ? adequacy.toFixed(2) : "-"}
                              </Text>
                              <Text style={styles.tableCell}>
                                {effectiveness ? effectiveness.toFixed(2) : "-"}
                              </Text>
                              <Text style={styles.tableCell}>
                                {effectiveness && adequacy ? finalRate : "-"}
                              </Text>
                              <Text style={styles.tableCell}>
                                {NA ? "N/A" : finalRate?.toFixed(2)}
                              </Text>
                            </View>
                          );
                        })}
                    </View>
                  );
                })}
              <View style={styles.areaMeanBlock}>
                <Text style={styles.areaMeanText}>
                  Area Weight: {weight.toFixed(2)}%
                </Text>
                <Text style={styles.areaMeanText}>
                  Area Mean (Internal Survey):{" "}
                  {areaMean ? areaMean.toFixed(2) : "N/A"}
                </Text>
                <Text style={styles.areaMeanText}>
                  Weighted Area Mean:
                  {weightedAreaMean ? weightedAreaMean.toFixed(2) : "N/A"}
                </Text>
              </View>

              <View style={styles.narrativeBlock}>
                <Text style={styles.narrativeTitle}>Strengths</Text>
                <Text style={styles.paragraph}>
                  {strengths ? strengths.content : "None"}
                </Text>

                <Text style={styles.narrativeTitle}>Weaknesses</Text>
                <Text style={styles.paragraph}>
                  {weaknesses ? weaknesses.content : "None"}
                </Text>

                <Text style={styles.narrativeTitle}>Recommendations</Text>
                <Text style={styles.paragraph}>
                  {recommendations ? recommendations.content : "None"}
                </Text>
              </View>
            </Page>
          );
        })}
      <Page style={styles.contentPage}>
        <Image src={"/letterhead.png"} style={styles.letterhead} />
        <Text style={styles.reportTitle}>Summary of Area Means</Text>

        <View style={{ marginTop: 20 }}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeaderCell}>Area</Text>
            <Text style={styles.tableHeaderCell}>Weight (%)</Text>
            <Text style={styles.tableHeaderCell}>Area Mean</Text>
            <Text style={styles.tableHeaderCell}>Weighted Mean</Text>
          </View>

          {areaFolders
            .sort((a, b) => a.area.label.localeCompare(b.area.label))
            .map((areaFolder) => {
              const area = areaFolder.area;
              const areaMean = calculateAreaMean(
                areaFolder,
                SurveyTeamType.INTERNAL
              );
              const weightedAreaMean = calculateWeightedAreaMean(
                areaFolder,
                SurveyTeamType.INTERNAL
              );
              const weight = area.weight;

              return (
                <View style={styles.tableRow} key={area.id}>
                  <Text style={styles.tableCell}>{area.label}</Text>
                  <Text style={styles.tableCell}>{weight.toFixed(2)}</Text>
                  <Text style={styles.tableCell}>
                    {areaMean ? areaMean.toFixed(2) : "N/A"}
                  </Text>
                  <Text style={styles.tableCell}>
                    {weightedAreaMean ? weightedAreaMean.toFixed(2) : "N/A"}
                  </Text>
                </View>
              );
            })}
        </View>

        <View
          style={{
            marginTop: 20,
            padding: 8,
            backgroundColor: "#eef1f5",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#222" }}>
            Grand Weighted Mean:{" "}
            {grandWeightedMean ? grandWeightedMean.toFixed(2) : "N/A"}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default SelfSurveyReportPDF;
