import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.instrument.deleteMany({
    where: { accreditingBody: "ACCUP" },
  });

  const instrument = await prisma.instrument.create({
    data: {
      name: "ACCUP Survey Instrument",
      accreditingBody: "ACCUP",
      area: {
        create: [
          {
            label: "Area I",
            description: "Vision, Mission, Goals and Objectives",
            weight: 0,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description:
                    "Statement of Vision, Mission, Goals and Objectives",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has a system of determining the Vision and Mission.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional guidelines and SUC Charter showing VMGO formulation process.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The Vision clearly reflects what the institution hopes to become in the future.",
                        category: Category.SYSTEM,
                        evidence:
                          "Published Vision statement in bulletins, catalogs, and on official website.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The Mission clearly reflects the institution's legal and educational mandate.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official mission statement aligned with the SUC Charter and University/College Code.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "The Goals of the College/Academic Unit are consistent with the Mission of the institution.",
                        category: Category.SYSTEM,
                        evidence:
                          "Unit-level goals documented in bulletins, manuals, and meeting minutes.",
                      },
                      {
                        label: "S.5.1.",
                        description:
                          "Technical skills in Industrial Technology.",
                        category: Category.SYSTEM,
                        evidence:
                          "Course syllabi, laboratory manuals, and student project records demonstrating technical skills.",
                      },
                      {
                        label: "S.5.2.",
                        description: "Research and extension capabilities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty research reports, extension project logs, and published studies showing student participation.",
                      },
                      {
                        label: "S.5.3.",
                        description:
                          "Students' own ideas, desirable attitudes and personal discipline.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student portfolios, reflective journals, and participation reports in VMGO activities.",
                      },
                      {
                        label: "S.5.4.",
                        description: "Moral character.",
                        category: Category.SYSTEM,
                        evidence:
                          "Code of conduct, disciplinary records, and certificates from ethics workshops.",
                      },
                      {
                        label: "S.5.5.",
                        description:
                          "Critical, analytical, problem solving and other higher order thinking skills.",
                        category: Category.SYSTEM,
                        evidence:
                          "Capstone projects, problem-based learning outputs, and assessment reports.",
                      },
                      {
                        label: "S.5.6.",
                        description: "Aesthetic and cultural values.",
                        category: Category.SYSTEM,
                        evidence:
                          "Arts and culture program participation records and event documentation.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The Institution/College conducts a review on the statement of the Vision and Mission as well as its goals and program objectives for approval of authorities concerned.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Minutes of review meetings signed by approving authorities and VMGO approval records.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The College/Academic Unit follows a system of formulating its goals and the objectives of the program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Standard operating procedures and documented program development guidelines.",
                      },
                      {
                        label: "I.3.1",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the administrators.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets showing administrator participation in VMGO meetings.",
                      },
                      {
                        label: "I.3.2",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the faculty.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty attendance sheets and feedback forms during VMGO review sessions.",
                      },
                      {
                        label: "I.3.3",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the staff.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Staff participation logs and meeting minutes for VMGO activities.",
                      },
                      {
                        label: "I.3.4",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student participation reports and activity logs in VMGO formulation.",
                      },
                      {
                        label: "I.3.5",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the other stakeholders.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Signed feedback forms from linkages, alumni, and industry partners.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The VMGO are crafted and duly approved by the BOR/BOT.",
                        category: Category.OUTCOME,
                        evidence:
                          "Official approval documents from BOR/BOT with VMGO attached.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Dissemination and Acceptability",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The VMGO are available on bulletin boards, in catalogs/manuals and in other forms of communication media.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos of billboards, bulletins, brochures, catalogs, manuals, and other media used for VMGO dissemination.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "A system of dissemination and acceptability of the VMGO is enforced.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Documented dissemination protocols and official memos to faculty, staff, and students.",
                      },
                      {
                        label: "I.2.1",
                        description:
                          "The administrators/faculty attend in-service seminars and trainings on awareness and acceptability of the Vision and mission of the Institution.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets and certificates from VMGO awareness seminars.",
                      },
                      {
                        label: "I.2.2",
                        description:
                          "The administrators/faculty attend in-service seminars and trainings on awareness and acceptability of the Goals of the College/Academic Unit.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets and certificates from goal-awareness trainings.",
                      },
                      {
                        label: "I.2.3",
                        description:
                          "The administrators/faculty attend in-service seminars and trainings on awareness and acceptability of the Objectives of the Program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets and certificates from program objective awareness sessions.",
                      },
                      {
                        label: "I.3.1",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the administrators.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets showing administrator participation.",
                      },
                      {
                        label: "I.3.2",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the faculty.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets showing faculty participation.",
                      },
                      {
                        label: "I.3.3",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the staff.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets showing staff participation.",
                      },
                      {
                        label: "I.3.4",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets showing student participation.",
                      },
                      {
                        label: "I.3.5",
                        description:
                          "The formulation/review/revision of the VMGO is participated in by the other stakeholders.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Signed feedback forms from linkages, alumni, and community partners.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The faculty and staff perform their jobs/functions in consonance with the VMGO.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty performance evaluations linked to VMGO objectives.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The VMGO are widely disseminated to the different agencies, institutions, industry sector and the community.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Distribution records, emails, and outreach reports to agencies, industry, and community.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "There is full awareness and acceptance of the VMGO by the administrators, faculty, staff, students and other stakeholders.",
                        category: Category.OUTCOME,
                        evidence:
                          "Survey results, feedback forms, and meeting minutes showing stakeholder acknowledgment.",
                      },
                      {
                        label: "O.2.1",
                        description:
                          "There is congruency between actual educational practices and activities with the Vision and mission of the SUC.",
                        category: Category.OUTCOME,
                        evidence:
                          "Curriculum maps, syllabi, and program activity logs.",
                      },
                      {
                        label: "O.2.2",
                        description:
                          "There is congruency between actual educational practices and activities with the Goals of the College/Department of Industrial Technology.",
                        category: Category.OUTCOME,
                        evidence:
                          "Documentation of departmental programs and activities aligned with goals.",
                      },
                      {
                        label: "O.2.3",
                        description:
                          "There is congruency between actual educational practices and activities with the Objectives of the Industrial Technology program.",
                        category: Category.OUTCOME,
                        evidence:
                          "Program reports and assessment records showing objective attainment.",
                      },
                      {
                        label: "O.3",
                        description:
                          "The goals and objectives are being achieved.",
                        category: Category.OUTCOME,
                        evidence:
                          "Assessment reports demonstrating student learning outcome achievement.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          
        ],
      },
    },
    include: { area: true },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
