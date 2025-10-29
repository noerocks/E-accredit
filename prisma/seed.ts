import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const LevelThreePhaseTwo = await prisma.instrument.create({
    data: {
      name: "Level III Phase 2",
      accreditingBody: "Criterias",
      area: {
        create: [
          {
            label: "Area I",
            description: "Instruction",
            weight: 0,
          },
          {
            label: "Area II",
            description: "Extension",
            weight: 0,
          },
          {
            label: "Area III",
            description: "Research",
            weight: 0,
          },
          {
            label: "Area IV",
            description: "Performance in Licensure Examinations",
            weight: 0,
          },

          {
            label: "Area V",
            description: "Faculty Development",
            weight: 0,
          },
          {
            label: "Area VI",
            description: "Institutional Linkages",
            weight: 0,
          },
          {
            label: "Area VII",
            description: "Library and other Learning Facilities",
            weight: 0,
          },
        ],
      },
    },
  });
  const LevelFourPhaseTwo = await prisma.instrument.create({
    data: {
      name: "Level IV Phase 2",
      accreditingBody: "Criterias",
      area: {
        create: [
          {
            label: "Area I",
            description: "Research",
            weight: 0,
          },
          {
            label: "Area II",
            description: "Graduate Performance",
            weight: 0,
          },
          {
            label: "Area III",
            description: "Community Service",
            weight: 0,
          },
          {
            label: "Area IV",
            description: "International Linkages",
            weight: 0,
          },
          {
            label: "Area V",
            description: "Planning Processes",
            weight: 0,
          },
        ],
      },
    },
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
                        label: "S.1",
                        description:
                          "The institution has a system of determining the Vision and Mission.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional guidelines and SUC Charter showing VMGO formulation process.",
                      },
                      {
                        label: "S.2",
                        description:
                          "The Vision clearly reflects what the institution hopes to become in the future.",
                        category: Category.SYSTEM,
                        evidence:
                          "Published Vision statement in bulletins, catalogs, and on official website.",
                      },
                      {
                        label: "S.3",
                        description:
                          "The Mission clearly reflects the institution's legal and educational mandate.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official mission statement aligned with the SUC Charter and University/College Code.",
                      },
                      {
                        label: "S.4",
                        description:
                          "The Goals of the College/Academic Unit are consistent with the Mission of the institution.",
                        category: Category.SYSTEM,
                        evidence:
                          "Unit-level goals documented in bulletins, manuals, and meeting minutes.",
                      },
                      {
                        label: "S.5.1",
                        description:
                          "The Objectives have the expected outcomes in terms of competencies (skills and knowledge), values and other attributes of the graduates which include the development of the technical skills in Industrial Technology. ",
                        category: Category.SYSTEM,
                        evidence:
                          "Course syllabi, laboratory manuals, and student project records demonstrating technical skills.",
                      },
                      {
                        label: "S.5.2",
                        description:
                          "The Objectives have the expected outcomes in terms of competencies (skills and knowledge), values and other attributes of the graduates which include the development of the Research and extension capabilities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty research reports, extension project logs, and published studies showing student participation.",
                      },
                      {
                        label: "S.5.3",
                        description:
                          "The Objectives have the expected outcomes in terms of competencies (skills and knowledge), values and other attributes of the graduates which include the development of the Students' own ideas, desirable attitudes and personal discipline.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student portfolios, reflective journals, and participation reports in VMGO activities.",
                      },
                      {
                        label: "S.5.4",
                        description:
                          "The Objectives have the expected outcomes in terms of competencies (skills and knowledge), values and other attributes of the graduates which include the development of the Moral character.",
                        category: Category.SYSTEM,
                        evidence:
                          "Code of conduct, disciplinary records, and certificates from ethics workshops.",
                      },
                      {
                        label: "S.5.5",
                        description:
                          "The Objectives have the expected outcomes in terms of competencies (skills and knowledge), values and other attributes of the graduates which include the development of the Critical, analytical, problem solving and other higher order thinking skills.",
                        category: Category.SYSTEM,
                        evidence:
                          "Capstone projects, problem-based learning outputs, and assessment reports.",
                      },
                      {
                        label: "S.5.6",
                        description:
                          "The Objectives have the expected outcomes in terms of competencies (skills and knowledge), values and other attributes of the graduates which include the development of Aesthetic and cultural values.",
                        category: Category.SYSTEM,
                        evidence:
                          "Arts and culture program participation records and event documentation.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The Institution/College conducts a review on the statement of the Vision and Mission as well as its goals and program objectives for approval of authorities concerned.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Minutes of review meetings signed by approving authorities and VMGO approval records.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The College/Academic Unit follows a system of formulating its goals and the objectives of the program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Standard operating procedures and documented program development guidelines.",
                      },
                      {
                        label: "I.3",
                        description:
                          " The College/Academic Unit, faculty, personnel, students and otherstakeholders (cooperating agencies, linkages, alumni, industry sector another concerned groups) participate in the formulation, review and/or revision of the VMGO.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance sheets showing administrator participation in VMGO meetings.",
                      },
                      {
                        label: "O.1",
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
                        label: "S.1",
                        description:
                          "The VMGO are available on bulletin boards, in catalogs/manuals and in other forms of communication media.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos of billboards, bulletins, brochures, catalogs, manuals, and other media used for VMGO dissemination.",
                      },
                      {
                        label: "I.1",
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
                        label: "O.1",
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
          {
            label: "Area II",
            description: "Faculty",
            weight: 8,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description:
                    "Academic Qualifications And Professional Experience",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The required number of faculty possesses graduate degrees appropriate and relevant/allied to the Industrial Technology program.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty profiles, official transcripts, and copies of graduate degree diplomas relevant to the program.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "Qualification such as related professional experience is considered.",
                        category: Category.SYSTEM,
                        evidence:
                          "Employment records, certificates of previous work experience, and service records relevant to the field of specialization.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "Qualification such as specialization is considered.",
                        category: Category.SYSTEM,
                        evidence:
                          "Certificates of specialization, training documents, and records of advanced study in a specific discipline.",
                      },
                      {
                        label: "S.2.3",
                        description:
                          "Qualification such as educational qualification is considered.",
                        category: Category.SYSTEM,
                        evidence:
                          "Academic transcripts, diplomas, and certifications verifying educational attainment.",
                      },
                      {
                        label: "S.2.4",
                        description:
                          "Qualification such as technical skills and competence is considered.",
                        category: Category.SYSTEM,
                        evidence:
                          "Skills assessment results, technical training certificates, and documentation of practical work or projects.",
                      },
                      {
                        label: "S.2.5",
                        description:
                          "Qualification such as special abilities, computer literacy, and research productivity is considered.",
                        category: Category.SYSTEM,
                        evidence:
                          "Certificates of computer literacy, research publications, and documentation of innovative or creative outputs.",
                      },
                      {
                        label: "S.3",
                        description:
                          "Faculty handling OJT/practicum courses (Supervised Industry Immersion courses) have had at least three (3) years of teaching and industry-based experience in the field.",
                        category: Category.SYSTEM,
                        evidence:
                          "Service records, certificates of employment, and documentation of industry immersion or training.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "At least 50% of the faculty are Graduate degree holders.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of faculty with corresponding graduate degrees and verified credentials from HR or academic affairs.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "The faculty demonstrates professional competence and is engaged in instruction.",
                        category: Category.SYSTEM,
                        evidence:
                          "Teaching schedules, class observations, and course syllabi showing effective instruction delivery.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "The faculty demonstrates professional competence and is engaged in research.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved research proposals, published papers, and records of completed research projects.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "The faculty demonstrates professional competence and is engaged in extension.",
                        category: Category.SYSTEM,
                        evidence:
                          "Extension project reports, activity documentation, and certificates of community engagement participation.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "The faculty demonstrates professional competence and is engaged in production.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of production outputs, laboratory production logs, and documentation of income-generating projects.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "The faculty demonstrates professional competence and is engaged in consultancy and expert service.",
                        category: Category.SYSTEM,
                        evidence:
                          "Consultancy contracts, certificates of expert service rendered, and endorsement letters from partner institutions.",
                      },
                      {
                        label: "I.1.6",
                        description:
                          "The faculty demonstrates professional competence and is engaged in publication, creative, and scholarly work.",
                        category: Category.SYSTEM,
                        evidence:
                          "Published articles, creative work portfolios, and records of participation in conferences or scholarly publications.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The faculty pursue graduate degrees in Industrial Technology and/or allied fields from reputable institutions (with at least Level II accreditation status or World/Asian rank).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty enrollment and graduation records, diplomas, certificates of enrollment, and accreditation status of partner institutions.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The institution has qualified and competent faculty.",
                        category: Category.OUTCOME,
                        evidence:
                          "Summary of faculty qualifications, updated faculty profiles, PRC licenses, and performance evaluation results.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Recruitment, Selection and Orientation",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "There is an institutional Human Resource Development Plan/Program designed for faculty recruitment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copy of the Institutional Human Resource Development Plan and faculty recruitment program document.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of academic qualification. (Mandatory)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty selection documents, applicant transcripts, and qualification verification records.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of personal qualities. (Mandatory)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Interview evaluation forms and personality assessment records.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of communication skill. (Mandatory)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Demonstration teaching evaluations and communication skill assessment forms.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of teaching ability. (Mandatory)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Teaching demonstration reports, classroom observation checklists, and evaluator comments.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of medical examination result. (Mandatory)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Medical examination certificates and fitness-to-work results.",
                      },
                      {
                        label: "I.1.6",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of psychological examination result. (Mandatory)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Psychological evaluation reports and certificates of mental fitness.",
                      },
                      {
                        label: "I.1.7",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of relevant professional experience. (Optional)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Employment certificates, service records, and experience verification forms.",
                      },
                      {
                        label: "I.1.8",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of psycho-social characteristic. (Optional)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Psycho-social assessment reports and behavioral interview results.",
                      },
                      {
                        label: "I.1.9",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of previous record of employment. (Optional)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Employment history documents and previous performance appraisal reports.",
                      },
                      {
                        label: "I.1.10",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of technical or special skill and ability. (Optional)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Certificates of technical training, skill demonstrations, and competency test results.",
                      },
                      {
                        label: "I.1.11",
                        description:
                          "Recruitment and selection of faculty is processed by the Faculty Selection Board using the criterion of previous performance rating. (Optional)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Performance evaluation reports from previous employment or contract.",
                      },
                      {
                        label: "I.2.1",
                        description:
                          "The hiring system adopts an open competitive selection, based on the CSC-approved Merit System and Promotion Plan of the institution published and well-disseminated through print media (newspapers, flyers, and the CSC Bulletin of Vacant Positions).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of published job postings in newspapers, flyers, and CSC bulletin announcements.",
                      },
                      {
                        label: "I.2.2",
                        description:
                          "The hiring system adopts an open competitive selection, based on the CSC-approved Merit System and Promotion Plan of the institution published and well-disseminated through broadcast media (television and radio).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Broadcast announcements, radio scripts, and television airing records of faculty hiring notices.",
                      },
                      {
                        label: "I.2.3",
                        description:
                          "The hiring system adopts an open competitive selection, based on the CSC-approved Merit System and Promotion Plan of the institution published and well-disseminated through the official website.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Screenshots or URLs of job postings published on the official institutional website.",
                      },
                      {
                        label: "I.2.4",
                        description:
                          "The hiring system adopts an open competitive selection, based on the CSC-approved Merit System and Promotion Plan of the institution published and well-disseminated through bulletin boards.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Photos of bulletin board postings and notices of faculty vacancies.",
                      },
                      {
                        label: "I.2.5",
                        description:
                          "The hiring system adopts an open competitive selection, based on the CSC-approved Merit System and Promotion Plan of the institution published and well-disseminated through other available means of communication (please specify).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Screenshots or records of postings via social media platforms, email announcements, or institutional chat groups.",
                      },
                      {
                        label: "I.3",
                        description:
                          "A Screening Committee selects and recommends the best and most qualified applicant.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Minutes of Screening Committee meetings, evaluation sheets, and recommendation letters.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Measures to avoid professional in-breeding are observed.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Hiring policy documents and recruitment records showing diversity of alma mater among faculty.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The institution conducts orientation for newly-hired faculty on its institutional vision and mission, CSC, PRC, DBM, and administration policies on their duties, responsibilities, benefits, and other academic concerns.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Orientation program materials, attendance sheets, and photos of faculty orientation sessions.",
                      },
                      {
                        label: "O.1.",
                        description: "The most qualified faculty are selected.",
                        category: Category.OUTCOME,
                        evidence:
                          "List of hired faculty with credentials, ranking results, and Faculty Selection Board resolution.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description: "Faculty Adequacy and Loading",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "Faculty-student ratio is in accordance with the program requirements and standards for lecture classes (1:40).",
                        category: Category.SYSTEM,
                        evidence:
                          "Class schedules, faculty loading sheets, and enrollment records showing lecture class ratios.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "Faculty-student ratio is in accordance with the program requirements and standards for laboratory classes (1:15).",
                        category: Category.SYSTEM,
                        evidence:
                          "Laboratory schedules, faculty assignment lists, and student class lists showing lab class ratios.",
                      },
                      {
                        label: "S.2",
                        description:
                          "There is a provision for incentives of overload teaching in accordance with the CMO of the program and/or institutional guidelines.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional guidelines on overload pay, approved CMO documents, and faculty payroll records.",
                      },
                      {
                        label: "S.3",
                        description:
                          "There are full-time faculty classified by rank, subject/specialization.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty roster with designation, specialization, and rank; HR classification records.",
                      },
                      {
                        label: "S.4",
                        description:
                          "Faculty schedule has time for preparation of lessons, scoring of test papers, record-keeping, class evaluation and other instruction-related activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty schedules, time allotment charts, and sample daily time records.",
                      },
                      {
                        label: "S.5",
                        description:
                          "Workload Guidelines contain sufficient time for teaching and/or research, extension, production and other assigned tasks.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional workload policy documents and approved faculty workload distribution forms.",
                      },
                      {
                        label: "S.6",
                        description:
                          "There is equitable, measurable and fair distribution of teaching load and other assignments.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty workload summary sheets and equitable distribution reports approved by the dean or chairperson.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The maximum total load is assigned to regular full-time faculty in accordance to the CMO of the program and institutional guidelines.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Approved faculty load forms and institutional workload policy referencing CMO compliance.",
                      },
                      {
                        label: "I.2",
                        description:
                          "A Faculty Manual is published formalizing faculty policies, standards and guidelines.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copy of the Faculty Manual and distribution records to academic staff.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Professional subjects are handled by specialists in the discipline/program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty profile summaries, PRC licenses, and academic credentials.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Faculty are assigned to teach their major/minor fields of specialization, for a maximum of four (4) different subject preparations within a semester.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty teaching assignments, subject load distribution, and specialization match reports.",
                      },
                      {
                        label: "I.5",
                        description:
                          "Administrative arrangements are adopted when vacancies/leaves of absence occur during the term.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Memoranda of substitution, approved temporary assignments, and faculty load adjustments.",
                      },
                      {
                        label: "I.6",
                        description:
                          "No less than 60% of the professional subjects in Industrial Technology program are handled by full-time faculty.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Summary of teaching assignments showing percentage of full-time faculty handling professional subjects.",
                      },
                      {
                        label: "I.7",
                        description:
                          "Teaching schedule does not allow more than six (6) hours of continuous teaching.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Official class schedules and time tables reviewed by the dean or chairperson.",
                      },
                      {
                        label: "I.8",
                        description:
                          "Administrative, research and/or professional assignment outside of regular teaching are given credits.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty load credit forms, institutional workload credit policy, and approval memos.",
                      },
                      {
                        label: "I.9",
                        description:
                          "Consultation, tutorial, remedial classes, expert services, and other instruction-related activities are given credits in consonance with faculty workload guidelines.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Consultation schedules, workload credit policies, and documentation of approved credits.",
                      },
                      {
                        label: "I.10",
                        description:
                          "Workload assignments and number of preparations follow existing workload guidelines.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Workload distribution sheets and compliance reports with institutional guidelines.",
                      },
                      {
                        label: "I.11",
                        description:
                          "The ratio of full-time faculty to part-time instructors should at least be 2:1.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Summary report of faculty employment status and ratio analysis report.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The faculty are efficient and effective, with sufficient time for instruction, research, extension and other assigned tasks.",
                        category: Category.OUTCOME,
                        evidence:
                          "Faculty performance evaluations, student feedback surveys, and accomplishment reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Rank and Tenure",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has a system of promotion in rank and tenure based on official issuances.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of promotion policies, institutional issuances, and documentation of rank and tenure system implementation.",
                      },
                      {
                        label: "S.2",
                        description:
                          "The institution has a policy on probationary status of employment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved institutional policy documents and HR guidelines on faculty probationary employment status.",
                      },
                      {
                        label: "S.3",
                        description:
                          "At least 50% of the full-time faculty teaching the professional courses are under permanent/regular status.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty employment records, plantilla of personnel, and summary of full-time and permanent teaching staff.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The institution implements the system of promotion in rank and salary based on existing policies and issuances (e.g. NBC 461).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of NBC 461 or related policies, promotion board resolutions, and official records of faculty rank and salary adjustments.",
                      },
                      {
                        label: "I.2",
                        description:
                          "Retirement, separation or termination benefits are implemented in accordance with institutional and government (CSC, GSIS/DBM) policies and guidelines.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "HR records, GSIS/DBM compliance documents, and copies of retirement or separation benefit guidelines.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The faculty are officially informed of their rank and tenure after evaluation of the credentials and performance.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Official appointment letters, ranking results, evaluation reports, and HR notifications to faculty.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The faculty concerned is officially informed of the extension, renewal, or termination of their appointments.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of official notices, renewal or termination letters, and acknowledgment receipts from faculty.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The institution implements a CSC-approved Strategic Performance Management System (SPMS) which emphasizes quality teaching performance, research, creative work, extension and production services.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Approved CSC-SPMS documents, performance review forms, and accomplishment reports showing implementation.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The probationary period or temporary status required before the grant of permanent status to the faculty is in accordance with Civil Service and institutional policies and guidelines.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "CSC and institutional guidelines on probationary period, employment contracts, and HR compliance reports.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The faculty are satisfied with their rank and employment status.",
                        category: Category.OUTCOME,
                        evidence:
                          "Faculty satisfaction surveys, feedback forms, and summary reports from HR or quality assurance office.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter E",
                  description: "Faculty Development",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has an approved and sustainable Faculty Development Program (FDP).",
                        category: Category.SYSTEM,
                        evidence:
                          "Official Faculty Development Program documents, institutional FDP guidelines, and approved strategic plans for faculty growth.",
                      },
                      {
                        label: "S.2",
                        description:
                          "There are policies on faculty academic recognition and grant of scholarships/fellowships and awards.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional policy manuals, scholarship/fellowship award guidelines, and records of faculty recognitions.",
                      },
                      {
                        label: "S.3",
                        description:
                          "Every faculty member has at least one active membership in professional/scientific organization or honor society relevant to his/her assignment and field of specialization.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty membership records, professional association certificates, and honor society affiliation documentation.",
                      },
                      {
                        label: "S.4",
                        description:
                          "The budget allocation for faculty development is adequate.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional budget documents, approved annual allocations for FDP, and expenditure reports.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "The institution implements a sustainable Faculty Development Program based on identified priorities/needs through upgraded educational qualifications (graduate studies).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty transcripts, graduate program enrollment records, and documentation of tuition assistance provided by the institution.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "The institution implements a sustainable Faculty Development Program based on identified priorities/needs through attendance to seminars, symposia and conferences for continuing education.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Certificates of seminar/workshop/conference attendance, travel and registration records, and training logs.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "The institution implements a sustainable Faculty Development Program based on identified priorities/needs through the conduct of research activities and publication of research output.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of published research papers, research project completion reports, and documentation of faculty participation in research activities.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "The institution implements a sustainable Faculty Development Program based on identified priorities/needs through giving lectures and presentation of papers in national/international conferences, symposia and seminars.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Conference programs, presentation certificates, and copies of lecture materials presented by faculty.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The institution supports the professional growth of the faculty through attendance in educational lectures, symposia, seminars, workshops, conferences, and other forms of training.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance certificates, HR-approved training schedules, and documented reports of professional development activities.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The institution conducts in-service training activities regularly at least once per term.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "In-service training schedules, attendance sheets, and post-training evaluation reports.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Selection of deserving faculty to be granted scholarships, fellowships, seminars, conferences and/or training grants is done objectively.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Selection criteria documents, committee evaluation forms, and approved lists of awarded faculty members.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The budget for faculty development is adequately allocated.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Approved institutional budget, disbursement reports, and expenditure summaries for faculty development activities.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The budget for faculty development is wisely-utilized.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Financial reports, audit reports, and justification documentation showing effective use of allocated FDP funds.",
                      },
                      {
                        label: "I.7.1",
                        description:
                          "The Faculty Development Program is implemented with the provision of adequate and qualified supervision of faculty.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Records of mentoring sessions, supervisor assignments, and documented faculty progress reports.",
                      },
                      {
                        label: "I.7.2",
                        description:
                          "The Faculty Development Program is implemented with the provision of scholarships, fellowships, sabbatical leaves, and research grants.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Award letters, sabbatical approval documents, and research grant agreements.",
                      },
                      {
                        label: "I.7.3",
                        description:
                          "The Faculty Development Program is implemented with the provision of financial support for active membership in professional organizations.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Payment receipts for professional memberships, approved reimbursement requests, and membership confirmation letters.",
                      },
                      {
                        label: "I.7.4",
                        description:
                          "The Faculty Development Program is implemented with the provision of deloading to finish the faculty's thesis/dissertation.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Official workload adjustment forms, HR approval letters, and faculty progress reports on thesis/dissertation.",
                      },
                      {
                        label: "I.7.5",
                        description:
                          "The Faculty Development Program is implemented with the provision of attendance in continuing professional education (CPE) programs such as seminars, workshops and conferences or some in-service training courses.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Certificates of CPE participation, training attendance logs, and HR-approved CPE schedules.",
                      },
                      {
                        label: "I.7.6",
                        description:
                          "The Faculty Development Program is implemented with the provision of conducting research activities related to the program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Research project proposals, completed research reports, and approval documents from the academic office.",
                      },
                      {
                        label: "I.7.7",
                        description:
                          "The Faculty Development Program is implemented with the provision of publishing scholarly articles and research outputs.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of published articles, journal acceptance letters, and research dissemination reports.",
                      },
                      {
                        label: "I.7.8",
                        description:
                          "The Faculty Development Program is implemented with the provision of production of instructional materials (IMs).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of modules, manuals, workbooks, and multimedia instructional resources produced by faculty.",
                      },
                      {
                        label: "I.8",
                        description:
                          "Opportunities for the faculty to attend/participate in capability building and enhancing activities are fairly distributed.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Rotation schedules, allocation logs, and records showing equitable distribution of training opportunities.",
                      },
                      {
                        label: "I.9",
                        description:
                          "Tuition fee privilege and other forms of assistance are utilized by faculty pursuing advanced (master's and/or doctoral) degrees.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Tuition assistance forms, enrollment records, and HR confirmation of faculty participation in advanced degree programs.",
                      },
                      {
                        label: "I.10",
                        description:
                          "Faculty are given incentives for book-writing, manuals, handbooks, compilations and instructional materials to keep up with new knowledge and techniques in the field of specialization.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Approved incentive forms, published instructional materials, and HR records documenting awarded incentives.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The faculty are well-trained and competent to serve the institution.",
                        category: Category.OUTCOME,
                        evidence:
                          "Faculty training records, performance appraisal reports, and HR assessment reports confirming competency.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The faculty are committed to serve and support the programs and projects of the institution.",
                        category: Category.OUTCOME,
                        evidence:
                          "Faculty involvement reports, service activity logs, and feedback from program/project coordinators.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter F",
                  description: "Professional Performance and Scholarly Works",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "The institution has a system of evaluating the faculty on professional performance.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of faculty evaluation forms, annual performance appraisal reports, and institutional guidelines on performance review.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "The institution has a system of evaluating the faculty on scholarly works.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved institutional policy documents, research output evaluation forms, and HR/academic office records of faculty scholarly publications.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "The Faculty demonstrate skills and competencies in knowledge of the program objectives/outcome(s).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Course syllabi, lesson plans, and faculty teaching portfolios showing alignment with program objectives and outcomes.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "The Faculty demonstrate skills and competencies in reflecting the program outcomes clearly in the course objectives.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Reviewed course syllabi, documented alignment reports, and internal quality assurance feedback showing program outcomes integration.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "The Faculty demonstrate skills and competencies in knowledge/mastery of the content, issues and methodologies in the discipline.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty teaching portfolios, observation reports, and student evaluation forms reflecting mastery of subject matter.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "The Faculty demonstrate skills and competencies of proficiency in the use of the language of instruction.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Recorded lectures, teaching observation reports, and student feedback showing clarity and proficiency in instruction.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "The Faculty demonstrate skills and competencies in the use of higher order thinking skills such as analytical, critical, creative, innovative and problem-solving.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Samples of classroom activities, student projects, and assessment rubrics demonstrating development of higher-order thinking skills.",
                      },
                      {
                        label: "I.1.6",
                        description:
                          "The Faculty demonstrate skills and competencies in innovativeness and resourcefulness in the different instructional processes.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Teaching portfolios, innovative lesson plans, and reports on the use of alternative teaching methods and instructional tools.",
                      },
                      {
                        label: "I.1.7",
                        description:
                          "The Faculty demonstrate skills and competencies in integration of values and work ethic in the teaching-learning process.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Course materials, classroom observation reports, and student feedback highlighting incorporation of ethics, values, and professionalism.",
                      },
                      {
                        label: "I.1.8",
                        description:
                          "The Faculty demonstrate skills and competencies in integration of Gender and Development (GAD) activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Documentation of GAD-related lesson plans, activity reports, and certificates of participation in gender development programs.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The faculty promptly submit required reports and other academic outputs.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Submitted research reports, teaching portfolios, and departmental submission logs indicating timely submission of academic outputs.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The faculty update lecture notes through an interface of relevant research findings and new knowledge.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Updated course materials, annotated lecture notes, and references showing integration of recent research and developments.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The faculty serve as resource person/lecturer/consultant in the field of Industrial Technology.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Invitations to serve as resource persons, consultancy reports, and certificates of participation from workshops or seminars.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The faculty present papers in local/regional/national and/or international fora.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Conference programs, presentation certificates, and copies of papers presented in professional forums.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The faculty publish papers in regional, national and international magazines and journals.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of published articles, journal acceptance letters, and publication indices.",
                      },
                      {
                        label: "I.7",
                        description:
                          "The faculty conduct research and publish outputs in refereed journals of national and international circulation.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of peer-reviewed journal publications, research project reports, and documentation of research impact.",
                      },
                      {
                        label: "I.8",
                        description:
                          "The faculty conduct extension and outreach activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Extension project reports, community outreach activity logs, and certificates of participation or service.",
                      },
                      {
                        label: "I.9",
                        description:
                          "The faculty regularly update respective course syllabi.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Version-controlled syllabi, documentation of syllabus review meetings, and updated course outlines.",
                      },
                      {
                        label: "I.10",
                        description:
                          "The faculty utilize ICT and other resources in the enhancement of the teaching-learning process.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Screenshots of online learning platforms, digital teaching materials, and ICT-enhanced lesson plans.",
                      },
                      {
                        label: "I.11",
                        description:
                          "The faculty produce instructional materials, e.g. workbooks, manuals, modules, audio-visual aids, etc to facilitate teaching and learning.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of faculty-produced modules, workbooks, multimedia presentations, and instructional resource inventories.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The faculty performance is generally satisfactory.",
                        category: Category.OUTCOME,
                        evidence:
                          "Faculty performance appraisal reports, student evaluation results, and HR summary assessments indicating satisfactory performance.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The scholarly works of the faculty are commendable.",
                        category: Category.OUTCOME,
                        evidence:
                          "Compilation of faculty research outputs, awards or recognitions received, and citations in journals or conference proceedings.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter G",
                  description: "Salaries, Fringe Benefits, and Incentives",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has a system of compensation and rewards to its faculty and staff.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of institutional compensation and benefits manuals, HR policy documents, and faculty/staff contracts.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "Fringe benefits include maternity leave/paternity leave with pay.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Approved leave records, HR policies on maternity/paternity leave, and payroll records reflecting paid leaves.",
                      },
                      {
                        label: "I.1.2",
                        description: "Fringe benefits include sick leave",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "HR leave applications and approvals, payroll records showing paid sick leaves, and institutional leave policies.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "Fringe benefits include study leave (with or without pay)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Study leave requests and approvals, official communications from HR, and certificates of completion of study programs.",
                      },
                      {
                        label: "I.1.4",
                        description: "Fringe benefits include vacation leave.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Vacation leave application and approval records, payroll records showing paid leaves, and HR leave policy documents.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "Fringe benefits include tuition fee discount for faculty and their dependents",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Tuition discount approval letters, HR policy on education benefits, and billing/discount records from the finance office.",
                      },
                      {
                        label: "I.1.6",
                        description:
                          "Fringe benefits include clothing/uniform allowance.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Payroll records showing clothing allowance, HR policies on uniform benefits, and faculty claims receipts.",
                      },
                      {
                        label: "I.1.7",
                        description:
                          "Fringe benefits include performance based bonus (PBB).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Payroll records of PBB disbursement, performance evaluation results, and official bonus approval memos.",
                      },
                      {
                        label: "I.1.8",
                        description:
                          "Fringe benefits include anniversary bonus.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Payroll records showing anniversary bonus payments, HR circulars on anniversary bonuses, and faculty acknowledgment receipts.",
                      },
                      {
                        label: "I.1.9",
                        description:
                          "Fringe benefits include honoraria/incentive for conducting research or for the production of scholarly works.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Official notices of research incentives, honoraria payment vouchers, and documentation of scholarly work submissions.",
                      },
                      {
                        label: "I.1.10",
                        description:
                          "Fringe benefits include housing privilege (optional).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Housing benefit agreements, payroll deductions/allowances, and HR approval documents.",
                      },
                      {
                        label: "I.1.11",
                        description:
                          "Fringe benefits include sabbatical leave.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Sabbatical leave applications and approvals, HR policy documents, and reports submitted upon return from sabbatical.",
                      },
                      {
                        label: "I.1.12",
                        description:
                          "Fringe benefits include compensatory leave credit.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Compensatory leave records, HR policy guidelines, and payroll/attendance logs.",
                      },
                      {
                        label: "I.1.13",
                        description:
                          "Fringe benefits include deloading to finish thesis/dissertation.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Official load adjustment forms, faculty requests and approvals, and academic department records.",
                      },
                      {
                        label: "I.1.14",
                        description:
                          "Fringe benefits include thesis/dissertation aid.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Documentation of thesis/dissertation grants, financial aid forms, and official disbursement records.",
                      },
                      {
                        label: "I.1.15",
                        description: "Other fringe benefits (please identify).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "HR documentation of additional benefits, payroll records, and faculty acknowledgment forms.",
                      },
                      {
                        label: "I.2",
                        description:
                          "Policies on salaries/benefits and other privileges are disseminated to the faculty.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Copies of HR circulars, faculty handbook distribution logs, and email announcements to faculty.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Salaries are paid regularly and promptly.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Payroll schedules, bank remittance statements, and HR salary payment reports.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Teaching assignments beyond the regular load are compensated (e.g., overload pay, service credits, etc.)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Overload pay vouchers, service credit records, and faculty assignment logs.",
                      },
                      {
                        label: "I.5",
                        description:
                          "Faculty who are actually involved in the production of scholarly materials are given credits for their work.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Documentation of scholarly output, faculty workload credit assignments, and official recognition records.",
                      },
                      {
                        label: "I.6",
                        description:
                          "Faculty with outstanding performance are given recognition/ awards and incentives.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Award certificates, HR recognition announcements, and records of incentives granted.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The faculty are satisfied with their compensation and rewards.",
                        category: Category.OUTCOME,
                        evidence:
                          "Faculty satisfaction survey results, feedback forms, and HR summary reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter H",
                  description: "Professionalism",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "There are approved SUC Code and SUC Faculty Manual that define the policies, guidelines, rules and regulations affecting the faculty.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of the SUC Code, Faculty Manual, and official institutional policy documents.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "The faculty responsibly observe the regular and prompt attendance to classes",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty attendance logs, class schedules, and official class record summaries.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "The faculty responsibly observe the participation in faculty meetings and university/college activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Minutes of faculty meetings, sign-in sheets, and activity participation reports.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "The faculty responsibly observe the completion of assigned tasks on time.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Task assignment sheets, completion reports, and supervisor evaluation records.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "The faculty responsibly observe the submission of all required reports promptly.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Submitted reports, deadline compliance logs, and acknowledgment receipts from office of the dean or department.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "The faculty responsibly observe the decorum at all times.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Code of conduct compliance reports, observation logs, and incident-free disciplinary records.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The faculty follow the Code of Ethics of the Profession, the Code of Ethical Standards for Government Officials and Employees (RA 6713).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Signed declarations of adherence to RA 6713, ethics compliance training certificates, and performance evaluation reports.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The faculty exercise academic freedom judiciously.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Records of approved academic publications, class lecture plans, and documentation of academic debate or discussion oversight.",
                      },
                      {
                        label: "I.4.1",
                        description:
                          "The faculty show commitment and loyalty to the Institution as evidenced by the observance of official time.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Time logs, office entry/exit records, and attendance sheets for official duties.",
                      },
                      {
                        label: "I.4.2",
                        description:
                          "The faculty show commitment and loyalty to the Institution as evidenced by the productive use of official time;",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Work output reports, teaching evaluations, and project completion records during official hours.",
                      },
                      {
                        label: "I.4.3",
                        description:
                          "The faculty show commitment and loyalty to the Institution as evidenced by the performance of other tasks and assignments, with or without compensation;",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Documentation of voluntary committees, extension service participation reports, and administrative task completion logs.",
                      },
                      {
                        label: "I.4.4",
                        description:
                          "The faculty show commitment and loyalty to the Institution as evidenced by the compliance with terms of agreement/contracts (e.g., scholarship and training).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Signed contracts, scholarship completion certificates, and training attendance records.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The faculty maintain harmonious interpersonal relations with superiors, peers, students, parents and the community.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "360-degree evaluation reports, feedback from stakeholders, and community service participation records.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The faculty demonstrate knowledge of recent educational trends/issues/resources in the field of Industrial Technology.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Certificates of workshops/conferences attended, publications, and professional development activity logs.",
                      },
                      {
                        label: "I.7",
                        description:
                          "The faculty show evidence of professional growth through further and continuing studies.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Graduate program transcripts, continuing education certificates, and professional development reports.",
                      },
                      {
                        label: "I.8",
                        description:
                          "The faculty engage in practices which enable the faculty to demonstrate harmonious interpersonal relations with the students, parents and the community.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Community engagement reports, parent-teacher meeting minutes, and student feedback forms.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The corps of faculty manifests a commendable level of professionalism.",
                        category: Category.OUTCOME,
                        evidence:
                          "Faculty performance appraisal summaries, recognition awards, and satisfaction survey results.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area III",
            description: "Curriculum and Instruction",
            weight: 8,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Curriculum and Program of Studies",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "The curriculum provides for the development of the professional competency in acquisition of knowledge and theories based on the field of specialization/discipline.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official course syllabi, curriculum guides, and program learning outcomes showing theory-based courses.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "The curriculum provides for the development of the professional competency in application of the theories to real problems in the field.",
                        category: Category.SYSTEM,
                        evidence:
                          "Samples of capstone projects, laboratory exercises, and case study reports completed by students.",
                      },
                      {
                        label: "S.1.3",
                        description:
                          "The curriculum provides for the development of the professional competency in demonstration of skills applying different strategies in the actual work setting.",
                        category: Category.SYSTEM,
                        evidence:
                          "Internship logs, practicum evaluation reports, and fieldwork assessment sheets.",
                      },
                      {
                        label: "S.2",
                        description:
                          "There is a system of validation of subjects taken from other schools.",
                        category: Category.SYSTEM,
                        evidence:
                          "Credit transfer records, equivalency validation forms, and approval letters from the Registrar's Office.",
                      },
                      {
                        label: "S.3",
                        description:
                          "The curriculum reflects local, regional and national development goals as well as the institution's vision and mission.",
                        category: Category.SYSTEM,
                        evidence:
                          "Curriculum mapping documents showing alignment with institutional mission, CHED policies, and national development plans.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The curriculum/program of study meets the requirements and standards of CHED, Professional Regulations Commission, Professional Organizations or Societies and other related agencies.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "CHED program accreditation certificates, PRC licensure exam pass rate reports, and professional organization compliance letters.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The subjects are logically sequenced and prerequisite courses are identified.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Curriculum flowcharts, prerequisite course lists, and program sequencing tables.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The curricular content is responsive to the needs of the country and recent developments in the profession.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Documentation of curriculum revisions, workshop minutes, and stakeholder consultation reports.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The curricular content covers the extent of the professional and technical preparation required of its graduates.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Course syllabi, laboratory manuals, and program outcome assessments demonstrating technical and professional skills.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The curriculum integrates values, reflective of national customs, culture and tradition in cases where applicable.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Sample modules or lessons on Filipino values, civic education, and ethics courses.",
                      },
                      {
                        label: "I.6",
                        description:
                          "Opportunities for participation in hands-on activities, such as immersion/practical training and field study are maintained in the curriculum.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Internship schedules, field trip reports, and community immersion participation logs.",
                      },
                      {
                        label: "I.7.1.1",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development: participative planning and designing of the curriculum by the administration.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Minutes of curriculum planning meetings with administrators and signed approval documents.",
                      },
                      {
                        label: "I.7.1.2",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development: participative planning and designing of the curriculum by the faculty.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty workshop attendance sheets, curriculum design proposals, and committee recommendations.",
                      },
                      {
                        label: "I.7.1.3",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development: participative planning and designing of the curriculum by the students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student survey results, focus group discussion summaries, and feedback forms incorporated into curriculum revisions.",
                      },
                      {
                        label: "I.7.1.4",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development: participative planning and designing of the curriculum by the alumni.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Alumni survey responses, consultation reports, and curriculum enhancement proposals from graduates.",
                      },
                      {
                        label: "I.7.1.5",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development: participative planning and designing of the curriculum by the representatives from the industry/sector.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Industry partner meeting minutes, letters of recommendation, and internship evaluation feedback.",
                      },
                      {
                        label: "I.7.1.6",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development: participative planning and designing of the curriculum by others (please specify)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Consultation records with professional organizations, NGOs, or community stakeholders.",
                      },
                      {
                        label: "I.7.2",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development, which includes periodic review, assessment, updating and approval of the curriculum by the Academic Council.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Academic Council meeting minutes, approved curriculum revisions, and review reports.",
                      },
                      {
                        label: "I.7.3",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development, which includes confirmation of the curriculum by the Board of Regents/Trustees (BOR/BOT);",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Signed BOR/BOT resolution approving the curriculum and official confirmation letters.",
                      },
                      {
                        label: "I.7.4",
                        description:
                          "The following activities are undertaken to ensure quality in the process of curriculum development: others (please specify).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Additional curriculum quality assurance reports such as internal audit or peer review documentation.",
                      },
                      {
                        label: "I.8",
                        description:
                          "The program of study allows the accommodation of students with special needs and assists them to finish the degree.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Accessibility policies, student support service records, and accommodation approval letters.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The curriculum is responsive and relevant to the demands of the times.",
                        category: Category.OUTCOME,
                        evidence:
                          "Graduate employment reports, employer feedback surveys, and tracer study results.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description:
                    "Instructional Processes, Methodologies and Learning Opportunities",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "There is an institutional outcomes-based standard format in the preparation of the course syllabi.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of approved course syllabi using the institutional outcomes-based format.",
                      },
                      {
                        label: "S.2",
                        description:
                          "The syllabus includes a list of suggested readings and references of print and electronic resources within the last 10 years.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample course syllabi showing updated reference lists and electronic resources.",
                      },
                      {
                        label: "S.3",
                        description:
                          "Copies of all course syllabi during the term are available at the Dean's office or in any other appropriate repository.",
                        category: Category.SYSTEM,
                        evidence:
                          "Repository records and filed copies of current term syllabi at the Dean's office.",
                      },
                      {
                        label: "S.4",
                        description:
                          "Copies of all course syllabi in previous terms are filed for reference purposes.",
                        category: Category.SYSTEM,
                        evidence:
                          "Archive of previous term syllabi available for reference in the department or Dean's office.",
                      },
                      {
                        label: "S.5",
                        description:
                          "There is provision for remedial measures to strengthen the basic skills in Mathematics and English and other tool subjects.",
                        category: Category.SYSTEM,
                        evidence:
                          "Remedial program schedules, tutorial session records, and student participation lists.",
                      },
                      {
                        label: "S.6",
                        description:
                          "There is a mechanism to facilitate the teaching-learning process.",
                        category: Category.SYSTEM,
                        evidence:
                          "Teaching-learning facilitation policies, faculty guides, and instructional support documentation.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The Dean or official concerned approves the updated syllabus for each subject",
                        category: Category.SYSTEM,
                        evidence:
                          "Signed approval forms or emails from the Dean or authorized officials for each course syllabus.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The faculty prepares syllabi with comprehensive contents.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample faculty-prepared syllabi showing course objectives, learning outcomes, and detailed content.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The faculty revise and enhances their syllabi preferably every two years and as needed.",
                        category: Category.SYSTEM,
                        evidence:
                          "Revision logs and updated syllabi versions with dates of enhancement.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The faculty distributes a copy of the syllabus to each student.",
                        category: Category.SYSTEM,
                        evidence:
                          "Acknowledgment receipts from students or distribution records of syllabi.",
                      },
                      {
                        label: "I.5",
                        description:
                          "Teaching strategies stimulate the development of the students' higher-order thinking skills (HOTS such as critical thinking, analytical thinking, creative thinking and problem-solving).",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample lesson plans and classroom activities promoting critical thinking, problem-solving, and creativity.",
                      },
                      {
                        label: "I.6.1",
                        description:
                          "Classroom instruction is enriched through the use of symposia, seminars, workshops, professional lectures.",
                        category: Category.SYSTEM,
                        evidence:
                          "Schedules, attendance sheets, and documentation of symposia, seminars, and workshops attended.",
                      },
                      {
                        label: "I.6.2",
                        description:
                          "Classroom instruction is enriched through the use of educational tours/learning visits/other co-curricular activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of educational tours, field trips, and co-curricular activities with student participation logs.",
                      },
                      {
                        label: "I.6.3",
                        description:
                          "Classroom instruction is enriched through the use of peer teaching/cooperative learning.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample lesson plans and documentation showing peer teaching and cooperative learning activities.",
                      },
                      {
                        label: "I.6.4",
                        description:
                          "Classroom instruction is enriched through the use of computer-assisted instruction (CAI) and computer-assisted learning (CAL).",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of CAI/CAL software usage, student computer lab activity logs, and learning outcomes.",
                      },
                      {
                        label: "I.7.1",
                        description:
                          "At least three(3) of the following course requirements are used: group/individual projects.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample project submissions, grading rubrics, and faculty assessment records.",
                      },
                      {
                        label: "I.7.2",
                        description:
                          "At least three(3) of the following course requirements are used: group/individual reports.",
                        category: Category.SYSTEM,
                        evidence:
                          "Submitted reports from students with evaluation comments and grading sheets.",
                      },
                      {
                        label: "I.7.3",
                        description:
                          "At least three(3) of the following course requirements are used: group/individual term papers.",
                        category: Category.SYSTEM,
                        evidence:
                          "Term papers submitted by students along with evaluation rubrics and feedback.",
                      },
                      {
                        label: "I.7.4",
                        description:
                          "At least three(3) of the following course requirements are used: performance activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student performance activity records, observation sheets, and faculty evaluations.",
                      },
                      {
                        label: "I.7.5",
                        description:
                          "At least three(3) of the following course requirements are used: written and oral examinations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Examination papers, oral exam schedules, grading sheets, and faculty evaluation records.",
                      },
                      {
                        label: "I.7.6",
                        description:
                          "At least three(3) of the following course requirements are used: learning contract.",
                        category: Category.SYSTEM,
                        evidence:
                          "Signed learning contracts between faculty and students with assessment records.",
                      },
                      {
                        label: "I.7.7",
                        description:
                          "At least three(3) of the following course requirements are used: portfolio.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student portfolios with evaluation sheets and faculty feedback.",
                      },
                      {
                        label: "I.7.8",
                        description:
                          "At least three(3) of the following course requirements are used: learning modules.",
                        category: Category.SYSTEM,
                        evidence:
                          "Learning modules created by faculty and used in classroom instruction with documentation.",
                      },
                      {
                        label: "I.7.9",
                        description:
                          "At least three(3) of the following course requirements are used: research study.",
                        category: Category.SYSTEM,
                        evidence:
                          "Research studies conducted by students with assessment records and faculty guidance.",
                      },
                      {
                        label: "I.7.10",
                        description:
                          "At least three(3) of the following course requirements are used: others (please specify).",
                        category: Category.SYSTEM,
                        evidence:
                          "Other documented course requirements such as case studies or multimedia projects with evaluation.",
                      },
                      {
                        label: "I.8.1",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: film showing.",
                        category: Category.SYSTEM,
                        evidence:
                          "Film screening schedules, lesson integration plans, and student reflections.",
                      },
                      {
                        label: "I.8.2",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: projects.",
                        category: Category.SYSTEM,
                        evidence:
                          "Project instructions, student submissions, and grading rubrics.",
                      },
                      {
                        label: "I.8.3",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: group dynamics.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of group activities, observation reports, and student feedback.",
                      },
                      {
                        label: "I.8.4",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: case study.",
                        category: Category.SYSTEM,
                        evidence:
                          "Case study exercises, student submissions, and faculty evaluation reports.",
                      },
                      {
                        label: "I.8.5",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: workshops.",
                        category: Category.SYSTEM,
                        evidence:
                          "Workshop schedules, participation records, and student outputs.",
                      },
                      {
                        label: "I.8.6",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: simulations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Simulation exercise documentation, student performance records, and faculty notes.",
                      },
                      {
                        label: "I.8.7",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: dimensional question approach.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample question sets using dimensional approach with evaluation sheets.",
                      },
                      {
                        label: "I.8.8",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: brainstorming.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of classroom brainstorming sessions and student output.",
                      },
                      {
                        label: "I.8.9",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: buzz sessions.",
                        category: Category.SYSTEM,
                        evidence:
                          "Buzz session activity records with faculty observation notes.",
                      },
                      {
                        label: "I.8.10",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: informal creative groups.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of informal group activities and output samples.",
                      },
                      {
                        label: "I.8.11",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: interactive learning.",
                        category: Category.SYSTEM,
                        evidence:
                          "Lesson plans and class recordings showing interactive learning activities.",
                      },
                      {
                        label: "I.8.12",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: team teaching.",
                        category: Category.SYSTEM,
                        evidence:
                          "Team teaching schedules, lesson plans, and student evaluations.",
                      },
                      {
                        label: "I.8.13",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: micro teaching.",
                        category: Category.SYSTEM,
                        evidence:
                          "Micro-teaching session plans, faculty observation notes, and student feedback.",
                      },
                      {
                        label: "I.8.14",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: macro teaching.",
                        category: Category.SYSTEM,
                        evidence:
                          "Macro teaching activity plans, recordings, and evaluation reports.",
                      },
                      {
                        label: "I.8.15",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: tandem teaching.",
                        category: Category.SYSTEM,
                        evidence:
                          "Tandem teaching schedules, lesson plans, and faculty evaluation documents.",
                      },
                      {
                        label: "I.8.16",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: peer teaching.",
                        category: Category.SYSTEM,
                        evidence:
                          "Peer teaching plans, classroom observation reports, and student output.",
                      },
                      {
                        label: "I.8.17",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: multi-media/courseware/ teachware.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of multimedia materials, lesson integration plans, and student work.",
                      },
                      {
                        label: "I.8.18",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: experiments.",
                        category: Category.SYSTEM,
                        evidence:
                          "Laboratory experiment logs, student reports, and evaluation sheets.",
                      },
                      {
                        label: "I.8.19",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: problem-solving.",
                        category: Category.SYSTEM,
                        evidence:
                          "Problem-solving activity plans, student submissions, and faculty assessment.",
                      },
                      {
                        label: "I.8.20",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: type study methods.",
                        category: Category.SYSTEM,
                        evidence:
                          "Type study lesson plans, student outputs, and evaluation records.",
                      },
                      {
                        label: "I.8.21",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: reporting;",
                        category: Category.SYSTEM,
                        evidence:
                          "Student report submissions and faculty evaluation logs.",
                      },
                      {
                        label: "I.8.22",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: panel discussion.",
                        category: Category.SYSTEM,
                        evidence:
                          "Panel discussion schedules, student participation logs, and faculty observation notes.",
                      },
                      {
                        label: "I.8.23",
                        description:
                          "Instruction is enriched through the use of, at least ten (10) of the following techniques/strategies: others (please specify).",
                        category: Category.SYSTEM,
                        evidence:
                          "Other instructional strategies documentation with student outputs and faculty evaluations.",
                      },
                      {
                        label: "I.9",
                        description:
                          "Instructional strategies provide for student's individual needs and the development of multiple intelligences.",
                        category: Category.SYSTEM,
                        evidence:
                          "Lesson plans showing differentiated instruction strategies and documentation of multi-intelligence activities.",
                      },
                      {
                        label: "I.10.1",
                        description:
                          "Instruction is enhanced through the submission of approved and updated syllabus per course.",
                        category: Category.SYSTEM,
                        evidence:
                          "Signed copies of updated syllabi per course.",
                      },
                      {
                        label: "I.10.2",
                        description:
                          "Instruction is enhanced through the regular classroom observation/supervision.",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom observation reports and faculty feedback forms.",
                      },
                      {
                        label: "I.10.3",
                        description:
                          "Instruction is enhanced through the regular faculty meetings with the College/Academic Unit Dean/Department Chair.",
                        category: Category.SYSTEM,
                        evidence:
                          "Minutes of faculty meetings with action points documented.",
                      },
                      {
                        label: "I.10.4",
                        description:
                          "Instruction is enhanced through the regular faculty performance evaluation.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty performance evaluation reports and follow-up action plans.",
                      },
                      {
                        label: "I.10.5",
                        description:
                          "Instruction is enhanced through the attendance/participation of faculty in in-service training.",
                        category: Category.SYSTEM,
                        evidence:
                          "Certificates and attendance records of faculty participating in in-service training.",
                      },
                      {
                        label: "I.10.6",
                        description:
                          "Instruction is enhanced through the conduct of experimental classes.",
                        category: Category.SYSTEM,
                        evidence:
                          "Experimental class reports, lesson plans, and student feedback.",
                      },
                      {
                        label: "I.10.7",
                        description:
                          "Instruction is enhanced through the adoption of alternative instructional delivery modes, such as modular instruction, e-learning and on-line study.",
                        category: Category.SYSTEM,
                        evidence:
                          "E-learning platform logs, modular instruction materials, and student completion reports.",
                      },
                      {
                        label: "I.11",
                        description:
                          "Instructional materials (IMs) are reviewed and recommended by the Instructional Materials Committee.",
                        category: Category.SYSTEM,
                        evidence:
                          "IMC meeting minutes, review recommendations, and approved IM lists.",
                      },
                      {
                        label: "I.12",
                        description:
                          "Varied, multi-sensory materials and computer programs are utilized.",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom activity records and sample multi-sensory instructional materials.",
                      },
                      {
                        label: "I.13",
                        description:
                          "The College/Academic Unit maintains consortia and linkages with other learning institutions for academic exchange of instructional materials.",
                        category: Category.SYSTEM,
                        evidence:
                          "Memoranda of understanding (MOUs) or partnership agreements and records of material exchanges.",
                      },
                      {
                        label: "I.14",
                        description:
                          "The faculty are encouraged to produce their own instructional materials such as modules, software, visual aids, manuals and textbooks.",
                        category: Category.SYSTEM,
                        evidence:
                          "Samples of faculty-produced instructional materials and copyright/patent documentation.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Course syllabi are updated and approved by concerned authorities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of updated and approved syllabi with signatures of authorities.",
                      },
                      {
                        label: "O.2",
                        description:
                          "Varied teaching strategies are efficiently and effectively used.",
                        category: Category.SYSTEM,
                        evidence:
                          "Lesson plans, classroom activity records, and student performance outcomes.",
                      },
                      {
                        label: "O.3",
                        description:
                          "Instructional materials produced by the faculty are copyrighted/patented.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copyright and patent certificates of faculty-created instructional materials.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description: "Assessment of Academic Performance",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "The program of studies has a system of evaluating student performance through a combination of formative tests such as quizzes, units tests.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample quiz and unit test papers, grading sheets, faculty assessment records.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "The program of studies has a system of evaluating student performance through a combination of summative tests such as mid-term and final examination.",
                        category: Category.SYSTEM,
                        evidence:
                          "Mid-term and final exam papers, answer keys, and grading reports.",
                      },
                      {
                        label: "S.1.3",
                        description:
                          "The program of studies has a system of evaluating student performance through a combination of project and term papers.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample student projects, term papers, project evaluation rubrics.",
                      },
                      {
                        label: "S.1.4",
                        description:
                          "The program of studies has a system of evaluating student performance through a combination of practicum and performance tests.",
                        category: Category.SYSTEM,
                        evidence:
                          "Practicum evaluation forms, performance test results, faculty supervision logs.",
                      },
                      {
                        label: "S.1.5",
                        description:
                          "The program of studies has a system of evaluating student performance through a combination of other course requirements.",
                        category: Category.SYSTEM,
                        evidence:
                          "Assignment submissions, laboratory reports, extra credit activity documentation.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "The summative tests is comprehensive enough to test the different levels of cognitive skills and knowledge of content.",
                        category: Category.SYSTEM,
                        evidence:
                          "Test blueprints, table of specifications, sample graded exams showing coverage of cognitive levels.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "The summative tests is based on a well-designed Table of Specifications (TOS).",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of Table of Specifications used for exam construction, annotated exam questions mapped to TOS.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "Varied evaluation measures are used, such as: portfolio.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student portfolios with assessment comments and evaluation sheets.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "Varied evaluation measures are used, such as: rubric assessment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Rubrics used for grading assignments, projects, or presentations.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "Varied evaluation measures are used, such as: skills demonstration.",
                        category: Category.SYSTEM,
                        evidence:
                          "Recorded sessions of student skill demonstrations, evaluation forms.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "Varied evaluation measures are used, such as: paper and pencil tests.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of written tests and their corresponding answer keys.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "Varied evaluation measures are used, such as: oral examinations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Oral exam schedules, evaluation sheets, recorded observations.",
                      },
                      {
                        label: "I.1.6",
                        description:
                          "Varied evaluation measures are used, such as: group/individual reports.",
                        category: Category.SYSTEM,
                        evidence:
                          "Submitted group and individual reports, grading rubrics, faculty feedback.",
                      },
                      {
                        label: "I.1.7",
                        description:
                          "Varied evaluation measures are used, such as: group/individual study.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documented group/individual study outputs, peer review feedback, faculty assessment forms.",
                      },
                      {
                        label: "I.1.8",
                        description:
                          "Varied evaluation measures are used, such as: others (please specify).",
                        category: Category.SYSTEM,
                        evidence:
                          "Samples of alternative assessment activities (e.g., multimedia presentations, research posters) with evaluation records.",
                      },
                      {
                        label: "I.2",
                        description:
                          "Evaluation tools/instruments are reviewed and revised periodically.",
                        category: Category.SYSTEM,
                        evidence:
                          "Revision logs of exams, assignments, rubrics, and evaluation instruments.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The faculty are trained how to assess student performance properly.",
                        category: Category.SYSTEM,
                        evidence:
                          "Workshop attendance records, training materials on assessment, certificates of completion.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The College/Academic Unit encourages and supports assessment for multiple intelligences.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of alternative assessment methods implemented, reports of diverse assessment outcomes.",
                      },
                      {
                        label: "I.5",
                        description:
                          "Course and test requirements are returned to students after results are checked, recorded, and analyzed.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample graded assignments and exams returned to students, record logs of grade posting.",
                      },
                      {
                        label: "I.6.1",
                        description:
                          "The system of student evaluation and grading is defined, understood, and disseminated to students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of student handbooks, grading policies, syllabus distribution records.",
                      },
                      {
                        label: "I.6.2",
                        description:
                          "The system of student evaluation and grading is defined, understood, and disseminated to faculty.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty orientation documents, grading policy memos, meeting minutes discussing evaluation procedures.",
                      },
                      {
                        label: "I.6.3",
                        description:
                          "The system of student evaluation and grading is defined, understood, and disseminated to academic administrators.",
                        category: Category.SYSTEM,
                        evidence:
                          "Administrative memos, internal circulars, meetings minutes showing understanding of evaluation policies.",
                      },
                      {
                        label: "I.6.4",
                        description:
                          "The system of student evaluation and grading is defined, understood, and disseminated to parents/guardians.",
                        category: Category.SYSTEM,
                        evidence:
                          "Parent-teacher meeting records, newsletters, copies of grading policies sent to parents.",
                      },
                      {
                        label: "O.1",
                        description:
                          "The student's academic performance is commendable.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student GPA reports, academic awards lists, honors recognition documentation.",
                      },
                      {
                        label: "O.2",
                        description:
                          "Retention rate of students is on the average.",
                        category: Category.SYSTEM,
                        evidence:
                          "Enrollment and retention statistics, academic office reports, official student records.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Management of Learning",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "There are policies on the management of learning which include the students' attendance in class and other academic activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official institutional policy on class attendance, attendance logs, and faculty monitoring reports.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "There are policies on the management of learning which include the schedule of classes.",
                        category: Category.SYSTEM,
                        evidence:
                          "Published class schedules, academic calendar, institutional memoranda on class scheduling.",
                      },
                      {
                        label: "S.1.3",
                        description:
                          "There are policies on the management of learning which include the students' discipline.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student code of conduct, disciplinary committee reports, documentation of student disciplinary actions.",
                      },
                      {
                        label: "S.1.4",
                        description:
                          "There are policies on the management of learning which include the maintenance of cleanliness and orderliness.",
                        category: Category.SYSTEM,
                        evidence:
                          "School cleanliness and maintenance guidelines, inspection checklists, janitorial logs, campus audit reports.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The policies on management of learning are enforced.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of enforcement actions, monitoring reports, and records of compliance with learning policies.",
                      },
                      {
                        label: "I.2",
                        description:
                          "Student activities are well-planned and implemented.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student activity calendars, event planning documents, post-activity evaluation reports.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Assignments are designed to reinforce teaching which result to student's maximum learning.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sample assignments, grading rubrics, student performance records, faculty lesson plans.",
                      },
                      {
                        label: "I.4.1",
                        description:
                          "In classes using lecture and other similar methods of teaching, the number of students does not exceed 50. 30 sqm. - 25 students",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom capacity records, seating arrangement plans, enrollment lists.",
                      },
                      {
                        label: "I.4.2",
                        description:
                          "In classes using lecture and other similar methods of teaching, the number of students does not exceed 50. 56 sqm. -50 students",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom occupancy reports, academic scheduling documents, official classroom assignments.",
                      },
                      {
                        label: "I.5",
                        description:
                          "Maximum class size of 50 for undergraduate courses is observed.",
                        category: Category.SYSTEM,
                        evidence:
                          "Enrollment records, class rosters, institutional regulations on class sizes.",
                      },
                      {
                        label: "I.6",
                        description:
                          "Classroom discipline is maintained in accordance with democratic practices.",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom observation reports, disciplinary logs, faculty feedback forms.",
                      },
                      {
                        label: "I.7",
                        description:
                          "The class officers and assigned students assist in maintaining cleanliness of classroom, laboratories, corridors and the school campus.",
                        category: Category.SYSTEM,
                        evidence:
                          "Campus cleanliness duty rosters, inspection checklists, faculty and student reports.",
                      },
                      {
                        label: "I.8.1",
                        description:
                          "Independent work and performance are encouraged and monitored in activities such as projects/reports.",
                        category: Category.SYSTEM,
                        evidence:
                          "Project guidelines, sample student reports, faculty assessment records.",
                      },
                      {
                        label: "I.8.2",
                        description:
                          "Independent work and performance are encouraged and monitored in activities such as thesis/practicum.",
                        category: Category.SYSTEM,
                        evidence:
                          "Thesis manuals, practicum evaluation forms, faculty supervision logs.",
                      },
                      {
                        label: "I.8.3",
                        description:
                          "Independent work and performance are encouraged and monitored in activities: others (please specify)",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of alternative independent learning activities, portfolios, faculty monitoring records.",
                      },
                      {
                        label: "I.9",
                        description:
                          "In practicum courses, (field study, OJT, practice teaching, etc.) the number of trainees supervised by each coordinator does not exceed 50.",
                        category: Category.SYSTEM,
                        evidence:
                          "Practicum/OJT supervision assignment lists, coordinator workload records, field study documentation.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Learning is efficiently and effectively managed.",
                        category: Category.SYSTEM,
                        evidence:
                          "Learning outcome reports, course completion rates, academic performance statistics, internal evaluation reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter E",
                  description: "Graduation Requirements",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "There is a policy on graduation requirements.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official graduation policy documents, academic handbooks, and institutional memoranda detailing requirements.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The students are regularly informed of the academic requirements of their respective courses.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student advisement records, course orientation handouts, academic bulletin publications, email notifications to students.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The College/Academic Unit implements the system for student returnees and transferees to meet the residence and other graduation requirements.",
                        category: Category.SYSTEM,
                        evidence:
                          "Guidelines for transferees and returning students, enrollment clearance forms, documented academic counseling sessions.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Graduating students conduct research and/or undergo practicum/OJT or other activities prescribed in their respective curricula.",
                        category: Category.SYSTEM,
                        evidence:
                          "Completed student research reports, practicum/OJT completion certificates, faculty evaluation forms for practicum.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The College/Academic Unit of Industrial Technology assists the graduating students with academic deficiencies, disciplinary cases, and other problems which hinder issuance of clearances.",
                        category: Category.SYSTEM,
                        evidence:
                          "Advisement logs, academic clearance reports, documentation of interventions for students with academic or disciplinary issues.",
                      },
                      {
                        label: "I.5",
                        description:
                          "A clearance from academic and financial accountabilities and responsibilities is required before graduation.",
                        category: Category.SYSTEM,
                        evidence:
                          "Signed academic and financial clearance forms, official clearance records, administrative checklists.",
                      },
                      {
                        label: "O.1",
                        description:
                          "At least 60% of the students enrolled in the program are able to graduate within the regular time frame.",
                        category: Category.SYSTEM,
                        evidence:
                          "Graduation statistics reports, enrollment and completion data, institutional performance monitoring records.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter F",
                  description:
                    "Administrative Support for Effective Instruction",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "The institution has policies on substitution or special arrangements whenever a faculty is on leave or absent.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official leave and substitution policy documents, faculty substitution schedules, administrative memos approving substitutions.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "The institution has policies on giving awards and/or recognition for faculty and students with outstanding achievements.",
                        category: Category.SYSTEM,
                        evidence:
                          "Award guidelines, official memos on recognition programs, lists of recipients and certificates.",
                      },
                      {
                        label: "S.1.3",
                        description:
                          "The institution has policies on supervision, monitoring and evaluation of faculty performance.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty evaluation policies, monitoring forms, annual performance reports.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The institution implements rules on the attendance of the faculty in their respective classes and other academic related activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty attendance logs, class monitoring sheets, HR compliance reports.",
                      },
                      {
                        label: "I.2",
                        description:
                          "There is a periodic faculty performance evaluation in accordance with existing institutional policies.",
                        category: Category.SYSTEM,
                        evidence:
                          "Performance evaluation forms, schedules of evaluation, reports signed by department heads.",
                      },
                      {
                        label: "I.3.1",
                        description:
                          "Dialogues are regularly conducted by the administration with the faculty.",
                        category: Category.SYSTEM,
                        evidence:
                          "Minutes of faculty-administration meetings, schedules of consultation sessions, memos inviting faculty for dialogues.",
                      },
                      {
                        label: "I.3.2",
                        description:
                          "Dialogues are regularly conducted by the administration with the students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Minutes of student-administration meetings, student council meeting records, feedback forms from dialogue sessions.",
                      },
                      {
                        label: "I.4.1",
                        description:
                          "Quality instruction is assured through conducting seminar/workshop on syllabi making.",
                        category: Category.SYSTEM,
                        evidence:
                          "Workshop schedules, attendance sheets, copies of syllabi developed during the workshop.",
                      },
                      {
                        label: "I.4.2",
                        description:
                          "Quality instruction is assured through holding workshops on test construction and the corresponding table of specifications.",
                        category: Category.SYSTEM,
                        evidence:
                          "Workshop reports, training materials, completed test blueprints and tables of specifications.",
                      },
                      {
                        label: "I.4.3",
                        description:
                          "Quality instruction is assured through conducting competency assessment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty competency assessment results, evaluation forms, action plans based on assessment.",
                      },
                      {
                        label: "I.4.4",
                        description:
                          "Quality instruction is assured through conducting supervisory visit of classes and providing assistance, if necessary.",
                        category: Category.SYSTEM,
                        evidence:
                          "Class visitation schedules, observation reports, records of follow-up assistance provided.",
                      },
                      {
                        label: "I.4.5",
                        description:
                          "Quality instruction is assured through holding of regular faculty meetings.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty meeting minutes, agendas, attendance sheets.",
                      },
                      {
                        label: "I.4.6",
                        description:
                          "Quality instruction is assured through requiring consultations between students and faculty.",
                        category: Category.SYSTEM,
                        evidence:
                          "Consultation logs, schedules of student-faculty meetings, documented feedback from students.",
                      },
                      {
                        label: "I.4.7",
                        description:
                          "Quality instruction is assured through conducting studies on academic performance of students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Academic performance reports, analysis summaries, improvement action plans.",
                      },
                      {
                        label: "I.4.8",
                        description:
                          "Quality instruction is assured through providing opportunities for the participation of the faculty in in-service training activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Certificates of participation, training schedules, reports on in-service training programs.",
                      },
                      {
                        label: "I.5.1",
                        description:
                          "Periodic faculty performance evaluation on teaching and in other functions is done by at least three of the following: the Dean/Academic Head/Department Chair.",
                        category: Category.SYSTEM,
                        evidence:
                          "Evaluation forms signed by Dean/Academic Head/Department Chair, evaluation summaries, official records.",
                      },
                      {
                        label: "I.5.2",
                        description:
                          "Periodic faculty performance evaluation on teaching and in other functions is done by at least three of the following: the students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student evaluation forms, compiled ratings, summary reports of student feedback.",
                      },
                      {
                        label: "I.5.3",
                        description:
                          "Periodic faculty performance evaluation on teaching and in other functions is done by at least three of the following: the faculty member himself/herself.",
                        category: Category.SYSTEM,
                        evidence:
                          "Self-evaluation reports submitted by faculty, reflection logs, performance improvement plans.",
                      },
                      {
                        label: "I.5.4",
                        description:
                          "Periodic faculty performance evaluation on teaching and in other functions is done by at least three of the following: peers.",
                        category: Category.SYSTEM,
                        evidence:
                          "Peer evaluation forms, assessment reports, feedback summaries.",
                      },
                      {
                        label: "I.5.5",
                        description:
                          "Periodic faculty performance evaluation on teaching and in other functions is done by at least three of the following: others (please specify)",
                        category: Category.SYSTEM,
                        evidence:
                          "Evaluation forms from external reviewers, industry partners, or accrediting bodies, reports of evaluation.",
                      },
                      {
                        label: "I.6",
                        description:
                          "Students are given fitting recognition for exemplary academic and non-academic performances.",
                        category: Category.SYSTEM,
                        evidence:
                          "Award certificates, honor roll lists, recognition ceremony photos.",
                      },
                      {
                        label: "I.7.1",
                        description:
                          "Outstanding achievement is recognized and encouraged through the inclusion in honor roll, Dean's list, etc.",
                        category: Category.SYSTEM,
                        evidence:
                          "Honor roll lists, Dean’s List publications, official announcements.",
                      },
                      {
                        label: "I.7.2",
                        description:
                          "Outstanding achievement is recognized and encouraged through the grant of tuition scholarships.",
                        category: Category.SYSTEM,
                        evidence:
                          "Scholarship award letters, lists of grantees, scholarship program guidelines.",
                      },
                      {
                        label: "I.7.3",
                        description:
                          "Outstanding achievement is recognized and encouraged through the award of honor medals and merit certificates.",
                        category: Category.SYSTEM,
                        evidence:
                          "Award certificates, medals issued, ceremony photos and reports.",
                      },
                      {
                        label: "I.7.4",
                        description:
                          "Outstanding achievement is recognized and encouraged through the membership in honor societies/honor class/sections, etc.",
                        category: Category.SYSTEM,
                        evidence:
                          "Membership records, induction ceremony reports, official recognition letters.",
                      },
                      {
                        label: "I.7.5",
                        description:
                          "Outstanding achievement is recognized and encouraged through the grant of special privileges such as opportunities in leadership and others (except exemption from major exams on all professional business subjects).",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of privileges granted, leadership program participation lists, official memos.",
                      },
                      {
                        label: "I.7.6",
                        description:
                          "Outstanding achievement is recognized and encouraged through the grant of awards and recognition for their outstanding academic accomplishments e.g., Best Thesis, Student Researcher of the Year, etc.",
                        category: Category.SYSTEM,
                        evidence:
                          "Awardee lists, certificates, research competition results, official announcements.",
                      },
                      {
                        label: "I.8.1",
                        description:
                          "Indicators on performance of graduates are studied as follows: employability of graduates.",
                        category: Category.SYSTEM,
                        evidence:
                          "Graduate tracer studies, employment surveys, employment records.",
                      },
                      {
                        label: "I.8.2",
                        description:
                          "Indicators on performance of graduates are studied as follows: feedback from employers regarding performance of graduates.",
                        category: Category.SYSTEM,
                        evidence:
                          "Employer survey reports, letters of feedback, internship evaluations.",
                      },
                      {
                        label: "O.1",
                        description:
                          "The faculty and students have commendable performance as a result of administrative support.",
                        category: Category.SYSTEM,
                        evidence:
                          "Performance recognition reports, faculty and student awards, statistical summary of achievements.",
                      },
                      {
                        label: "O.2",
                        description:
                          "The graduates of the program are employable.",
                        category: Category.SYSTEM,
                        evidence:
                          "Graduate employment reports, tracer study results, employer testimonials.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area IV",
            description: "Support to Students",
            weight: 8,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Student Services Program (SSP)",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has Student Services Program (SSP).",
                        category: Category.SYSTEM,
                        evidence:
                          "Official SSP documentation/manual, program plan, approval records from the administration.",
                      },
                      {
                        label: "S.2",
                        description:
                          "The Student Affairs Services (SAS) program is consistent with the vision and mission of the Institution, goals of the College/Academic Unit and objectives of the Program.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional vision and mission statements, SAS program alignment documents, official memos.",
                      },
                      {
                        label: "S.3",
                        description:
                          "The objectives of the SAS are clearly defined.",
                        category: Category.SYSTEM,
                        evidence:
                          "SAS objectives document, program plan, official SOP or handbook.",
                      },
                      {
                        label: "S.4",
                        description:
                          "The objectives of the SAS are in accordance with CMO No. 9 series of 2013.",
                        category: Category.SYSTEM,
                        evidence:
                          "Comparison table showing SAS objectives versus CMO No. 9 s. 2013, official compliance report.",
                      },
                      {
                        label: "S.5.1",
                        description:
                          "The SAS is composed of student welfare programs and services",
                        category: Category.SYSTEM,
                        evidence:
                          "List of student welfare programs, program descriptions, schedules of activities.",
                      },
                      {
                        label: "S.5.2",
                        description:
                          "The SAS is composed of student development programs and services.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of student development programs, program manuals, reports of implemented activities.",
                      },
                      {
                        label: "S.6.1.1",
                        description:
                          "Basic services are available:  Student Welfare; Information and Orientation Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Orientation schedules, attendance sheets, program materials, photos/videos of orientation.",
                      },
                      {
                        label: "S.6.1.2",
                        description:
                          "Basic services are available:  Student Welfare; Guidance and Counseling Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counseling schedules, session logs, counseling office reports.",
                      },
                      {
                        label: "S.6.1.3",
                        description:
                          "Basic services are available:  Student Welfare; Career and Job Placement Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Career counseling records, placement assistance logs, alumni follow-up reports.",
                      },
                      {
                        label: "S.6.1.4",
                        description:
                          "Basic services are available:  Student Welfare; Economic Enterprise Development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of student entrepreneurial projects, cooperative reports, financial assistance documentation.",
                      },
                      {
                        label: "S.6.1.5",
                        description:
                          "Basic services are available:  Student Welfare; Student Handbook Development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Latest Student Handbook copy, distribution proof, revision logs.",
                      },
                      {
                        label: "S.6.2.1",
                        description:
                          "Basic services are available: Student Development; Student Activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Event schedules, photos, participation logs, activity reports.",
                      },
                      {
                        label: "S.6.2.2",
                        description:
                          "Basic services are available: Student Development; Student Organizations and Activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of active student organizations, meeting minutes, activity reports.",
                      },
                      {
                        label: "S.6.2.3",
                        description:
                          "Basic services are available: Student Development; Leadership Training.",
                        category: Category.SYSTEM,
                        evidence:
                          "Training program plans, attendance sheets, certificates of completion.",
                      },
                      {
                        label: "S.6.2.4",
                        description:
                          "Basic services are available: Student Development; Student Council/Government.",
                        category: Category.SYSTEM,
                        evidence:
                          "Organizational chart, council election records, meeting minutes.",
                      },
                      {
                        label: "S.6.2.5",
                        description:
                          "Basic services are available: Student Development; Student Discipline.",
                        category: Category.SYSTEM,
                        evidence:
                          "Disciplinary policies, incident reports, counseling logs.",
                      },
                      {
                        label: "S.6.2.6",
                        description:
                          "Basic services are available: Student Development; Student Publication/Year Book.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of student publications/yearbooks, editorial meeting logs.",
                      },
                      {
                        label: "S.6.3.1",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Admission Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Admission process manuals, online enrollment system records, brochures.",
                      },
                      {
                        label: "S.6.3.2",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Scholarships and Financial Assistance (SFA).",
                        category: Category.SYSTEM,
                        evidence:
                          "Scholarship programs list, awardee records, application forms.",
                      },
                      {
                        label: "S.6.3.3",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Food Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Food service contracts, canteen operation reports, student feedback forms.",
                      },
                      {
                        label: "S.6.3.4",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Health and Wellness Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Health service records, wellness program schedules, clinic logs.",
                      },
                      {
                        label: "S.6.3.5",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Safety and Security Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Security reports, safety drills records, incident logs.",
                      },
                      {
                        label: "S.6.3.6",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Student Housing and Residential Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dormitory management logs, housing assignments, inspection reports.",
                      },
                      {
                        label: "S.6.3.7",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Multi-faith and Inter-faith Services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Chaplaincy schedules, event reports, service attendance logs.",
                      },
                      {
                        label: "S.6.3.8",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Foreign/International Students Services (whenever applicable).",
                        category: Category.SYSTEM,
                        evidence:
                          "International student support records, orientation programs, visa assistance documents.",
                      },
                      {
                        label: "S.6.3.9",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Services for Students with Special Needs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Accessibility service records, special accommodations logs, resource materials.",
                      },
                      {
                        label: "S.6.3.10",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Culture and Arts Programs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Program schedules, event reports, photos/videos, student participation records.",
                      },
                      {
                        label: "S.6.3.11",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Sports and Development Programs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sports activity reports, event schedules, photos/videos of competitions.",
                      },
                      {
                        label: "S.6.3.12",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; Social and Community Involvement Programs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Community service logs, outreach program reports, student participation records.",
                      },
                      {
                        label: "S.6.3.13",
                        description:
                          "Basic services are available:  Institutional Student Programs and Services; others (please specify).",
                        category: Category.SYSTEM,
                        evidence:
                          "Program proposals, activity reports, official approvals for additional services.",
                      },
                      {
                        label: "S.7",
                        description:
                          "There is a SAS Unit that manages student affairs development and welfare programs. (Student Affairs and Services Unit)",
                        category: Category.SYSTEM,
                        evidence:
                          "Organizational chart, SAS unit establishment records, official memos.",
                      },
                      {
                        label: "S.8",
                        description:
                          "The SAS Unit has an organizational structure indicating its relationship with other Units. (Student Affairs and Services Unit)",
                        category: Category.SYSTEM,
                        evidence:
                          "Organizational chart showing SAS unit reporting lines, departmental structure documentation.",
                      },
                      {
                        label: "S.9",
                        description:
                          "The SAS Unit is headed by a qualified official. (Student Affairs and Services Unit)",
                        category: Category.SYSTEM,
                        evidence:
                          "Appointment letter of SAS head, curriculum vitae, qualification records.",
                      },
                      {
                        label: "S.10",
                        description:
                          "The SAS Unit is staffed with qualified personnel. (Student Affairs and Services Unit)",
                        category: Category.SYSTEM,
                        evidence:
                          "Staff resumes, qualification documents, organizational chart.",
                      },
                      {
                        label: "S.11",
                        description:
                          "The various student services are provided with adequate staff, physical facilities, equipment and materials (e.g. one (1) guidance counselor for every 1,000 students, etc.). (Administrative Support)",
                        category: Category.SYSTEM,
                        evidence:
                          "Staffing reports, facility inventory, equipment list, budget allocation records.",
                      },
                      {
                        label: "S.12",
                        description:
                          "There is sufficient budget allocation for the Student Affairs and Services of the institution. (Administrative Support)",
                        category: Category.SYSTEM,
                        evidence:
                          "Budget reports, financial statements, official allocation documents.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The objectives of the SAS are disseminated to and understood by the students, faculty, staff and administrators.",
                        category: Category.SYSTEM,
                        evidence:
                          "Minutes of meetings, official memos, student handbook, dissemination reports.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The SAS plans, implements, monitors and coordinates programs and services for student welfare and development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Program plans, monitoring reports, activity evaluation forms, coordination memos.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Prompt, courteous and efficient services in the handling of business transactions with students are evident.",
                        category: Category.SYSTEM,
                        evidence:
                          "Service satisfaction surveys, feedback forms, response time records.",
                      },
                      {
                        label: "I.4",
                        description: "The SAS staff receive salaries on time.",
                        category: Category.SYSTEM,
                        evidence:
                          "Payroll records, HR reports, salary disbursement schedules.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The SAS is represented in the policy and decision-making body of the Institution.",
                        category: Category.SYSTEM,
                        evidence:
                          "Meeting attendance records, organizational charts, policy committee minutes.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The projects and activities of the SAS Unit are recognized and implemented.",
                        category: Category.SYSTEM,
                        evidence:
                          "Program approval memos, project implementation reports, official acknowledgment letters.",
                      },
                      {
                        label: "I.7",
                        description:
                          "There is a continuous and systematic evaluation of the effectiveness of the programs and services for student welfare and development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Evaluation reports, survey results, program review documents.",
                      },
                      {
                        label: "O.1",
                        description:
                          "The students are satisfied with the Student Services Program.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student satisfaction surveys, feedback forms, focus group discussion records.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Student Welfare",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has a Student Handbook containing comprehensive information on programs and services for student welfare and development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copy of Student Handbook/manual, official handbook approval records, distribution list or proof of dissemination.",
                      },
                      {
                        label: "S.2",
                        description:
                          "A regular and comprehensive Orientation Program is held for new, returning and continuing students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Orientation program schedule, attendance sheets, presentation materials, photos/videos of orientation.",
                      },
                      {
                        label: "S.3.1",
                        description:
                          "The information materials on educational, career, personal and social concerns are readily available, such as R.A. 9262 or Anti Violence Against Women and Children Act.",
                        category: Category.SYSTEM,
                        evidence:
                          "Pamphlets, posters, guidance office resource materials, website links or digital resources.",
                      },
                      {
                        label: "S.3.2",
                        description:
                          "The information materials on educational, career, personal and social concerns are readily available, such as Anti-Bullying Act",
                        category: Category.SYSTEM,
                        evidence:
                          "Pamphlets, counseling office handouts, posters, awareness campaign photos.",
                      },
                      {
                        label: "S.3.3",
                        description:
                          "The information materials on educational, career, personal and social concerns are readily available, such as Guidelines on drug abuse prevention and control.",
                        category: Category.SYSTEM,
                        evidence:
                          "Posters, brochures, digital resources on drug prevention programs, guidance office resource files.",
                      },
                      {
                        label: "S.3.4",
                        description:
                          "The information materials on educational, career, personal and social concerns are readily available, such as R.A. 7877 or the Anti-Sexual Harassment Act of 1995.",
                        category: Category.SYSTEM,
                        evidence:
                          "Handouts, awareness campaigns, counseling resource materials, website resources.",
                      },
                      {
                        label: "S.3.5",
                        description:
                          "The information materials on educational, career, personal and social concerns are readily available, such as HIV AIDS awareness.",
                        category: Category.SYSTEM,
                        evidence:
                          "Pamphlets, posters, awareness campaign photos, health office resources.",
                      },
                      {
                        label: "S.3.6",
                        description:
                          "The information materials on educational, career, personal and social concerns are readily available, such as Self-care and healthy lifestyles.",
                        category: Category.SYSTEM,
                        evidence:
                          "Pamphlets, health seminars, wellness program documentation, counseling office handouts.",
                      },
                      {
                        label: "S.3.7",
                        description:
                          "The information materials on educational, career, personal and social concerns are readily available, such as R.A. 9442, particularly on the provision on public ridicule and vilification against persons with disability.",
                        category: Category.SYSTEM,
                        evidence:
                          "Posters, brochures, guidance office resources, orientation materials.",
                      },
                      {
                        label: "S.4.1",
                        description:
                          "The Guidance and Counseling Program provides the following services: information and inventory.",
                        category: Category.SYSTEM,
                        evidence:
                          "Guidance office inventory logs, information dissemination records, counseling office brochures.",
                      },
                      {
                        label: "S.4.2",
                        description:
                          "The Guidance and Counseling Program provides the following services: counseling.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counseling schedules, session logs, counseling reports, referral forms.",
                      },
                      {
                        label: "S.4.3",
                        description:
                          "The Guidance and Counseling Program provides the following services: appraisal and testing.",
                        category: Category.SYSTEM,
                        evidence:
                          "Test administration records, assessment reports, psychological evaluation documents.",
                      },
                      {
                        label: "S.4.4",
                        description:
                          "The Guidance and Counseling Program provides the following services: placement and follow-up.",
                        category: Category.SYSTEM,
                        evidence:
                          "Placement records, follow-up reports, tracking forms, student feedback forms.",
                      },
                      {
                        label: "S.4.5",
                        description:
                          "The Guidance and Counseling Program provides the following services: referral.",
                        category: Category.SYSTEM,
                        evidence:
                          "Referral forms, coordination letters with external agencies, counseling session records.",
                      },
                      {
                        label: "S.5",
                        description:
                          "Gender-sensitive individual and group counseling is provided.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counseling session logs, program guidelines, student feedback surveys.",
                      },
                      {
                        label: "S.6",
                        description:
                          "Counseling Services consider cultural differences.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counseling manuals, cultural sensitivity training certificates, session reports reflecting diverse needs.",
                      },
                      {
                        label: "S.7",
                        description:
                          "The Guidance Program is headed by a licensed Guidance Counselor with at least a master's degree in Guidance and Counseling.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counselor credential copies, license verification, HR records.",
                      },
                      {
                        label: "S.8",
                        description:
                          "All the Guidance Counselors are licensed.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counselor license copies, HR staff verification records.",
                      },
                      {
                        label: "S.9",
                        description:
                          "The Guidance Program is supported by qualified staff.",
                        category: Category.SYSTEM,
                        evidence:
                          "Staff qualifications records, organizational chart, employment contracts.",
                      },
                      {
                        label: "S.10",
                        description:
                          "Every student has an updated profile at the guidance office.",
                        category: Category.SYSTEM,
                        evidence:
                          "Cumulative student records, student profile database, update logs.",
                      },
                      {
                        label: "S.11",
                        description:
                          "A counseling room is provided for students including those with special needs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos of counseling room, accessibility compliance documents, room utilization logs.",
                      },
                      {
                        label: "S.12",
                        description:
                          "There is a well-planned assessment program for students with appropriate standardized psychological tests.",
                        category: Category.SYSTEM,
                        evidence:
                          "Assessment program plan, standardized test administration records, scoring sheets.",
                      },
                      {
                        label: "S.13",
                        description:
                          "Career seminars and job placement services are available for the students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Career seminar schedules, attendance sheets, placement records, seminar materials.",
                      },
                      {
                        label: "S.14",
                        description:
                          "There is a mechanism to establish partnership and collaboration with other institutions, agencies and industry.",
                        category: Category.SYSTEM,
                        evidence:
                          "MOAs, partnership agreements, correspondence with institutions/agencies.",
                      },
                      {
                        label: "S.15",
                        description:
                          "There is mechanism for storing and archiving student records for reference purposes.",
                        category: Category.SYSTEM,
                        evidence:
                          "Archiving policies, digital or physical storage system, access logs.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The ratio of a Guidance Counselor to student population is 1:1000.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counselor assignment list, student population data, staffing reports.",
                      },
                      {
                        label: "I.2",
                        description:
                          "Counseling and other student records are maintained and kept confidential.",
                        category: Category.SYSTEM,
                        evidence:
                          "Confidentiality policy, access logs, record-keeping procedures.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Appropriate intervention programs and services are adopted to promote and enhance student welfare and development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Program schedules, intervention plans, student feedback forms.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The Guidance Office maintains an updated inventory of student cumulative records.",
                        category: Category.SYSTEM,
                        evidence:
                          "Cumulative record inventory logs, database snapshots, update records.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The psychological tests are administered, scored and interpreted by qualified staff and the results are kept confidential.",
                        category: Category.SYSTEM,
                        evidence:
                          "Test administration records, staff qualifications, confidentiality policy documents.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The test results are disseminated to concerned parties.",
                        category: Category.SYSTEM,
                        evidence:
                          "Distribution logs, signed acknowledgment forms, email notifications.",
                      },
                      {
                        label: "I.7",
                        description:
                          "Test results are utilized in designing activities to meet student needs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Activity planning documents, program design logs, reports referencing test results.",
                      },
                      {
                        label: "I.8",
                        description:
                          "A scheme for appropriate follow-up and referrals is utilized.",
                        category: Category.SYSTEM,
                        evidence:
                          "Referral logs, follow-up schedules, coordination letters with relevant services.",
                      },
                      {
                        label: "I.9",
                        description:
                          "The guidance office prepares valid statistical data of students for career and job placement.",
                        category: Category.SYSTEM,
                        evidence:
                          "Career placement statistics, alumni follow-up reports, database extracts.",
                      },
                      {
                        label: "I.10",
                        description:
                          "Student placement is regularly monitored and followed up.",
                        category: Category.SYSTEM,
                        evidence:
                          "Placement monitoring logs, follow-up reports, alumni survey results.",
                      },
                      {
                        label: "I.11",
                        description:
                          "The institution maintains active networking with schools, communities, alumni, and other concerned agencies for career and job placement of students.",
                        category: Category.SYSTEM,
                        evidence:
                          "MOAs, partnership agreements, correspondence records, networking activity reports.",
                      },
                      {
                        label: "I.12",
                        description:
                          "Career counseling is provided to enable students to choose appropriate major/field of specialization.",
                        category: Category.SYSTEM,
                        evidence:
                          "Counseling session logs, program schedule, career counseling forms.",
                      },
                      {
                        label: "I.13",
                        description:
                          "Information materials on career and job opportunities are made accessible.",
                        category: Category.SYSTEM,
                        evidence:
                          "Pamphlets, posters, guidance office website resources, distribution records.",
                      },
                      {
                        label: "I.14.1",
                        description:
                          "The SAS maintains liaison with its alumni to follow up graduates job performance, vis-à-vis: awards received.",
                        category: Category.SYSTEM,
                        evidence:
                          "Alumni award records, correspondence logs, alumni follow-up reports.",
                      },
                      {
                        label: "I.14.2",
                        description:
                          "The SAS maintains liaison with its alumni to follow up graduates job performance, vis-à-vis: key positions in private and/or government agencies.",
                        category: Category.SYSTEM,
                        evidence:
                          "Alumni placement records, MOAs, employment verification letters.",
                      },
                      {
                        label: "I.14.3",
                        description:
                          "The SAS maintains liaison with its alumni to follow up graduates job performance, vis-à-vis: status of the enterprise, if applicable.",
                        category: Category.SYSTEM,
                        evidence:
                          "Alumni business tracking records, survey reports, correspondence with alumni entrepreneurs.",
                      },
                      {
                        label: "I.15",
                        description:
                          "Skills development programs are conducted.",
                        category: Category.SYSTEM,
                        evidence:
                          "Training schedules, attendance sheets, program materials, certificates of completion.",
                      },
                      {
                        label: "I.16",
                        description:
                          "The students are given assistance in career and job placement.",
                        category: Category.SYSTEM,
                        evidence:
                          "Placement assistance records, counseling session logs, follow-up reports.",
                      },
                      {
                        label: "I.17.1",
                        description:
                          "The institution encourages student economic ventures such as but not limited to student laboratory cooperatives.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of student cooperatives, financial statements, student participation reports.",
                      },
                      {
                        label: "I.17.2",
                        description:
                          "The institution encourages student economic ventures such as but not limited to entrepreneurial activities/projects.",
                        category: Category.SYSTEM,
                        evidence:
                          "Project reports, photos of student ventures, participation records.",
                      },
                      {
                        label: "I.17.3",
                        description:
                          "The institution encourages student economic ventures such as but not limited to savings.",
                        category: Category.SYSTEM,
                        evidence:
                          "Savings program records, account ledgers, student enrollment logs.",
                      },
                      {
                        label: "I.17.4",
                        description:
                          "The institution encourages student economic ventures such as but not limited to: others (please specify).",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of other initiatives, project proposals, financial reports.",
                      },
                      {
                        label: "I.18",
                        description:
                          "Updated information on student welfare and development are accessible and disseminated.",
                        category: Category.SYSTEM,
                        evidence:
                          "Updated materials, website links, newsletters, emails or posters.",
                      },
                      {
                        label: "I.19",
                        description:
                          "The student body is involved in the development and revision of Student Handbook.",
                        category: Category.SYSTEM,
                        evidence:
                          "Meeting minutes, consultation records, student feedback forms, draft revisions.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Quality student welfare services are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Service evaluation reports, student satisfaction surveys, awards/accreditations received by the guidance office.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description: "Student Development",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has a system of accreditation, monitoring and evaluation of student organizations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Accreditation guidelines, monitoring reports, evaluation forms, student organization accreditation records.",
                      },
                      {
                        label: "S.2",
                        description:
                          "The institution provides adequate office space and other forms of support to accredited student organizations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos of offices, office allocation records, provision of supplies and support documents.",
                      },
                      {
                        label: "S.3",
                        description:
                          "There is coordination between the school administration and SAS concerning students with drug and other related problems.",
                        category: Category.SYSTEM,
                        evidence:
                          "Memoranda of agreement (MOA) with counseling services, incident reports, coordination meeting minutes.",
                      },
                      {
                        label: "S.4",
                        description:
                          "A mechanism to address student grievance is in place.",
                        category: Category.SYSTEM,
                        evidence:
                          "Grievance procedure manuals, complaint forms, grievance committee meeting minutes, resolution reports.",
                      },
                      {
                        label: "S.5",
                        description:
                          "Programs and opportunities to develop and enhance leadership among students are provided.",
                        category: Category.SYSTEM,
                        evidence:
                          "Leadership training schedules, student participation lists, certificates of completion, training modules.",
                      },
                      {
                        label: "I.1",
                        description:
                          "Requirements and procedures for recognition/accreditation of student organizations are widely disseminated.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student handbook sections, official memos, website postings, orientation materials.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The Constitution and by-laws of student organizations incorporate participation and advocacy in social action activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of student organization constitutions/by-laws, records of social action activities, meeting minutes.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The institution conducts leadership training.",
                        category: Category.SYSTEM,
                        evidence:
                          "Training schedule, attendance logs, photos/videos, training modules and evaluation reports.",
                      },
                      {
                        label: "I.4.1",
                        description:
                          "The institution recognizes the right of the students to govern themselves as a student body.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student council constitution, recognition certificates, meeting minutes, official announcements.",
                      },
                      {
                        label: "I.4.2",
                        description:
                          "The institution recognizes the right of the students to be transparent and accountable to their constituents.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student council financial reports, audit records, published minutes of meetings.",
                      },
                      {
                        label: "I.4.3",
                        description:
                          "The institution recognizes the right of the students to be represented in various fora where the students need to be consulted.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official representation rosters, meeting attendance records, MOAs or agreements showing student representation.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The institution ensures transparency in the development/revision of guidelines and procedures for the student council/government.",
                        category: Category.SYSTEM,
                        evidence:
                          "Draft and final copies of guidelines, approval records, stakeholder consultation minutes.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The institution implements gender and disability sensitive rules and regulations published in a Student Handbook/Manual acceptable to students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student Handbook/manual, policy documents on gender and disability sensitivity, dissemination proof (emails, orientation attendance).",
                      },
                      {
                        label: "I.7",
                        description:
                          "Sanctions are enforced for misconduct such as but not limited to acts of vandalism, hazing, bullying, libelous statements and other negative acts that threaten peace and order inside and outside the school premises.",
                        category: Category.SYSTEM,
                        evidence:
                          "Disciplinary action records, incident reports, sanction enforcement logs, student handbook excerpts.",
                      },
                      {
                        label: "I.8",
                        description:
                          "Grievance Committee is established to ensure due process in dealing with students misconduct.",
                        category: Category.SYSTEM,
                        evidence:
                          "Grievance committee official formation documents, meeting minutes, complaint resolution reports.",
                      },
                      {
                        label: "I.9",
                        description:
                          "The institution supports the establishment and implementation of student publication as provided for in R.A. 7079, otherwise known as 'Campus Journalism Act of 1991' and other media forms.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student publication copies, office support documents, publication policies, faculty advisor reports.",
                      },
                      {
                        label: "I.10",
                        description:
                          "The production/publication of a yearbook is encouraged.",
                        category: Category.SYSTEM,
                        evidence:
                          "Yearbook samples, production schedules, student participation lists, office support records.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Quality student development services are assured.",
                        category: Category.SYSTEM,
                        evidence:
                          "Evaluation reports, student satisfaction surveys, participation records, awards or recognitions received by students.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Institutional Student Programs and Services",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "There is a system of student recruitment, selection, admission and retention.",
                        category: Category.SYSTEM,
                        evidence:
                          "Admission and retention policies, recruitment guidelines, student admission forms, enrollment statistics.",
                      },
                      {
                        label: "S.2",
                        description:
                          "Admission requirements and procedures of persons with disabilities as stipulated in R.A. 7277 are in place.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official guidelines for admission of PWD students, application forms with PWD provisions, relevant policy documents.",
                      },
                      {
                        label: "S.3",
                        description:
                          "Scholarships and financial assistance in various forms are available to students.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of scholarship programs, financial assistance forms, budget allocations, student awardees records.",
                      },
                      {
                        label: "S.4",
                        description:
                          "Policies and guidelines are institutionalized for students from marginalized sector of the country.",
                        category: Category.SYSTEM,
                        evidence:
                          "Policy documents for marginalized students, enrollment data of targeted beneficiaries, outreach program records.",
                      },
                      {
                        label: "S.5",
                        description:
                          "There is a policy on wellness and healthy lifestyle.",
                        category: Category.SYSTEM,
                        evidence:
                          "Wellness policy, campus health programs, wellness activity schedules, health promotion materials.",
                      },
                      {
                        label: "S.6",
                        description:
                          "Buildings and facilities which conform with government standards are provided with accessible and safe amenities for persons with disabilities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Campus building inspection reports, accessibility compliance certificates, photos of ramps, elevators, and other PWD facilities.",
                      },
                      {
                        label: "S.7",
                        description:
                          "There is a disaster risk reduction and management program in compliance with R.A. 10121, otherwise known as the 'Philippine Disaster Risk Reduction and Management Act of 2010'.",
                        category: Category.SYSTEM,
                        evidence:
                          "DRRM program documents, emergency response plans, training schedules, and compliance certificates.",
                      },
                      {
                        label: "S.8",
                        description:
                          "Policies on the use of student facilities are in place.",
                        category: Category.SYSTEM,
                        evidence:
                          "Facility usage guidelines, student handbook sections on facilities, approved schedules for student facility use.",
                      },
                      {
                        label: "S.9",
                        description:
                          "An integrated service program that caters to the various needs of foreign students are available, whenever applicable.",
                        category: Category.SYSTEM,
                        evidence:
                          "Foreign student support program documentation, orientation schedules, service records, international student feedback.",
                      },
                      {
                        label: "S.10",
                        description:
                          "A liaison officer is available to assist foreign students in their transactions with concerned government agencies, whenever applicable.",
                        category: Category.SYSTEM,
                        evidence:
                          "Appointment letter of liaison officer, office records of foreign student assistance, service logs.",
                      },
                      {
                        label: "S.11",
                        description:
                          "There are programs for life skills training (e.g. conflict and stress management, harassment, etc.) counseling, testing and referrals for students with special needs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Life skills training schedules, counseling session reports, student feedback forms, referral logs.",
                      },
                      {
                        label: "S.12",
                        description:
                          "The institution provides opportunities for promotion and appreciation of culture and arts.",
                        category: Category.SYSTEM,
                        evidence:
                          "Cultural event schedules, student participation lists, photos and videos of arts programs, awards for cultural activities.",
                      },
                      {
                        label: "S.13.1",
                        description:
                          "The institution has well equipped offices for: Culture and the Arts.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos of offices, inventory of equipment, program schedules for arts activities.",
                      },
                      {
                        label: "S.13.2",
                        description:
                          "The institution has well equipped offices for: Sports Development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sports facilities inventory, equipment lists, training schedules, photos of sports offices.",
                      },
                      {
                        label: "S.13.3",
                        description:
                          "The institution has well equipped offices for: Student Publications.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos of publication office, publication equipment inventory, student publication copies.",
                      },
                      {
                        label: "S.13.4",
                        description:
                          "The institution has well equipped offices for: Medical-Dental Clinic.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos of medical-dental clinic, list of medical equipment, staffing records.",
                      },
                      {
                        label: "S.14",
                        description:
                          "There is a well-furnished medical-dental clinic.",
                        category: Category.SYSTEM,
                        evidence:
                          "Clinic interior photos, inventory of furniture and medical equipment, clinic operational guidelines.",
                      },
                      {
                        label: "S.15.1",
                        description:
                          "There is a medical and dental program designed for diagnostic purposes.",
                        category: Category.SYSTEM,
                        evidence:
                          "Medical program plan, diagnostic procedure schedules, clinic records of student health checks.",
                      },
                      {
                        label: "S.15.2",
                        description:
                          "There is a medical and dental program designed for first aid.",
                        category: Category.SYSTEM,
                        evidence:
                          "First aid training schedules, first aid kits inventory, incident reports handled by clinic staff.",
                      },
                      {
                        label: "S.15.3",
                        description:
                          "There is a medical and dental program designed for prevention and prophylaxis.",
                        category: Category.SYSTEM,
                        evidence:
                          "Vaccination schedules, health education materials, student preventive care records.",
                      },
                      {
                        label: "S.15.4",
                        description:
                          "There is a medical and dental program designed for physical-dental exam.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of dental and physical exams, examination schedules, clinic logs.",
                      },
                      {
                        label: "S.16",
                        description:
                          "An updated information on student health condition is available to parents/guardians.",
                        category: Category.SYSTEM,
                        evidence:
                          "Health reports distributed to parents, online health portals, parent-student communication logs.",
                      },
                      {
                        label: "S.17",
                        description:
                          "There are mechanisms to promote national, sectoral and cultural sports activities and development in coordination with concerned agencies.",
                        category: Category.SYSTEM,
                        evidence:
                          "MOAs with sports agencies, schedules of sports programs, student participation lists.",
                      },
                      {
                        label: "S.18.1",
                        description:
                          "There are financial assistance programs designed for educational loans.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved loan program documents, student loan agreements, list of beneficiaries.",
                      },
                      {
                        label: "S.18.2",
                        description:
                          "There are financial assistance programs designed for student assistantship.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student assistantship policies, work assignment logs, payroll records.",
                      },
                      {
                        label: "S.18.3",
                        description:
                          "There are financial assistance programs designed for attendance to seminars, training (sports, leadership, etc.).",
                        category: Category.SYSTEM,
                        evidence:
                          "Seminar/training financial aid records, attendance logs, program approval documents.",
                      },
                      {
                        label: "S.18.4",
                        description:
                          "There are financial assistance programs designed for grants-in-aid.",
                        category: Category.SYSTEM,
                        evidence:
                          "Grant-in-aid program guidelines, awardee lists, budget allocation reports.",
                      },
                      {
                        label: "S.18.5",
                        description:
                          "There are financial assistance programs designed for: others (please specify).",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of other financial aid programs, student beneficiaries list, program announcements.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The faculty and students are properly informed of the admission guidelines and retention policies.",
                        category: Category.SYSTEM,
                        evidence:
                          "Orientation schedules, handbooks, official announcements, email communication logs.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The policies and procedures on selection, admission and retention of students are implemented.",
                        category: Category.SYSTEM,
                        evidence:
                          "Admission and retention records, enrollment statistics, implementation reports.",
                      },
                      {
                        label: "I.3.1",
                        description:
                          "The student admission records are filed and made available to concerned parties: enrollment trends.",
                        category: Category.SYSTEM,
                        evidence:
                          "Enrollment statistics reports, student record database, annual reports.",
                      },
                      {
                        label: "I.3.2",
                        description:
                          "The student admission records are filed and made available to concerned parties: drop-out rate.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dropout rate reports, retention analysis, student tracking logs.",
                      },
                      {
                        label: "I.3.3",
                        description:
                          "The student admission records are filed and made available to concerned parties: licensure examination results and passing percentage.",
                        category: Category.SYSTEM,
                        evidence:
                          "Licensure exam result summaries, institutional reports, student performance analytics.",
                      },
                      {
                        label: "I.3.4",
                        description:
                          "The student admission records are filed and made available to concerned parties: employability of graduates.",
                        category: Category.SYSTEM,
                        evidence:
                          "Graduate tracer studies, employment reports, alumni survey results.",
                      },
                      {
                        label: "I.3.5",
                        description:
                          "The student admission records are filed and made available to concerned parties: student transferees.",
                        category: Category.SYSTEM,
                        evidence:
                          "Transferee records, enrollment system logs, official transfer forms.",
                      },
                      {
                        label: "I.3.6",
                        description:
                          "The student admission records are filed and made available to concerned parties: student classification by specialization.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student academic records, enrollment statistics by specialization, program reports.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Retention policies are approved by the Academic Council and confirmed by the Board of Regents/Trustees.",
                        category: Category.SYSTEM,
                        evidence:
                          "Board/Academic Council approval documents, policy manuals, meeting minutes.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The list of tuition and other school fees is posted conspicuously.",
                        category: Category.SYSTEM,
                        evidence:
                          "Fee schedules displayed on bulletin boards, official website, or student portal screenshots.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The institution provides access to scholarship and financial assistance.",
                        category: Category.SYSTEM,
                        evidence:
                          "Scholarship application forms, approved awardee list, program brochures.",
                      },
                      {
                        label: "I.7",
                        description:
                          "Guidelines on scholarship and financial assistance are widely and promptly disseminated.",
                        category: Category.SYSTEM,
                        evidence:
                          "Announcements, email communications, website postings, student handbook sections.",
                      },
                      {
                        label: "I.8",
                        description:
                          "Criteria for safety, sanitation and food choices in the school canteen/cafeteria are enforced.",
                        category: Category.SYSTEM,
                        evidence:
                          "Canteen inspection reports, food safety certificates, menu approval documents.",
                      },
                      {
                        label: "I.9",
                        description:
                          "The institution coordinates with the local government for the safety and sanitation of food service outside the school premises.",
                        category: Category.SYSTEM,
                        evidence:
                          "MOAs with local government, inspection reports, sanitation compliance certificates.",
                      },
                      {
                        label: "I.10",
                        description:
                          "The institution periodically inspects food outlets for sanitation and hygiene. The sanitary permit is displayed in a prominent area of the food outlet.",
                        category: Category.SYSTEM,
                        evidence:
                          "Inspection reports, photos of sanitary permit display, audit logs.",
                      },
                      {
                        label: "I.11",
                        description:
                          "The primary health care services are administered to all students by licensed medical, dental and allied professionals.",
                        category: Category.SYSTEM,
                        evidence:
                          "Clinic staffing records, service logs, appointment schedules, student health reports.",
                      },
                      {
                        label: "I.12",
                        description:
                          "Facilities for keeping health care and updated health records of students are adequate and well-maintained.",
                        category: Category.SYSTEM,
                        evidence:
                          "Electronic or physical health record systems, audit reports, facility inspection reports.",
                      },
                      {
                        label: "I.13",
                        description:
                          "Policies and procedures in the selection of student athletes, performers, writers, etc. are implemented.",
                        category: Category.SYSTEM,
                        evidence:
                          "Selection guidelines, records of selection process, announcement of selected students.",
                      },
                      {
                        label: "I.14",
                        description:
                          "Health and related laws, rules and regulations are enforced.",
                        category: Category.SYSTEM,
                        evidence:
                          "Compliance reports, inspection certificates, policy enforcement records.",
                      },
                      {
                        label: "I.15",
                        description:
                          "Licensed and competent security personnel ensure the safety and security of students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Security staffing records, duty rosters, incident reports, training certifications.",
                      },
                      {
                        label: "I.16",
                        description:
                          "Earthquake and fire drills involving students, faculty and administrative staff are conducted regularly.",
                        category: Category.SYSTEM,
                        evidence:
                          "Drill schedules, attendance logs, drill evaluation reports, photos/videos.",
                      },
                      {
                        label: "I.17",
                        description:
                          "The institution establishes programs for the students to help in crime prevention, cleanliness and orderliness, observance of a clean and green environment, safety and security of the school premises.",
                        category: Category.SYSTEM,
                        evidence:
                          "Program plans, student participation records, photos/videos, campus improvement logs.",
                      },
                      {
                        label: "I.18",
                        description:
                          "The institution provides assistance to students on accessible, affordable, clean, conducive to learning, dormitories and housing facilities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dormitory facilities inspection reports, student housing application forms, photos of dormitory conditions.",
                      },
                      {
                        label: "I.19",
                        description:
                          "The institution ensures that the students right to practice his/her religion is respected.",
                        category: Category.SYSTEM,
                        evidence:
                          "Documentation of prayer rooms, religious activity schedules, student testimonials, policy manuals.",
                      },
                      {
                        label: "I.20",
                        description:
                          "Submission of required reports on foreign students to concerned government agencies is done, whenever applicable.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of submitted reports, acknowledgment receipts from agencies, submission logs.",
                      },
                      {
                        label: "I.21",
                        description:
                          "The Code of Conduct for foreign students in the country is enforced.",
                        category: Category.SYSTEM,
                        evidence:
                          "Code of conduct document, orientation attendance records, incident reports.",
                      },
                      {
                        label: "I.22",
                        description:
                          "The institution accommodates students with special needs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Accessibility reports, special needs accommodations, program participation logs.",
                      },
                      {
                        label: "I.23",
                        description:
                          "There is a regular submission of the list of students with special needs to the CHEDRO describing the Institutions intervention programs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Submitted reports to CHEDRO, intervention program documentation, acknowledgment receipts.",
                      },
                      {
                        label: "I.24",
                        description:
                          "Sports development programs are regularly conducted.",
                        category: Category.SYSTEM,
                        evidence:
                          "Training schedules, competition records, participation logs, photos/videos.",
                      },
                      {
                        label: "I.25",
                        description:
                          "The institution ensures opportunities for students to participate in socio and civic action activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Activity schedules, student participation lists, community service reports.",
                      },
                      {
                        label: "I.26",
                        description:
                          "The students are covered with Life and Accident Insurance.",
                        category: Category.SYSTEM,
                        evidence:
                          "Insurance policy documents, list of insured students, claim records.",
                      },
                      {
                        label: "I.27",
                        description:
                          "The institution rewards SAS staff for exceptional job performance.",
                        category: Category.SYSTEM,
                        evidence:
                          "Awardee list, recognition certificates, announcement records, staff performance reports.",
                      },
                      {
                        label: "I.28",
                        description:
                          "The institution informs the students and other stakeholders on other related programs and services not cited in CMO No.9 s. 2013.",
                        category: Category.SYSTEM,
                        evidence:
                          "Announcements, newsletters, student portal postings, circulars, orientation schedules.",
                      },
                      {
                        label: "O.1",
                        description:
                          "The institutional programs and services develop student potentials to the fullest.",
                        category: Category.SYSTEM,
                        evidence:
                          "Program completion reports, student performance assessments, awards and recognitions, survey/feedback results.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter E",
                  description: "Research, Monitoring, and Evaluation",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has a research program on student affairs and services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved institutional research program documentation on student affairs and services; program proposals and annual research plans.",
                      },
                      {
                        label: "S.2",
                        description:
                          "There is mechanism for monitoring and evaluation of SAS programs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official SAS monitoring and evaluation framework; SOPs or policy documents outlining M&E procedures.",
                      },
                      {
                        label: "S.3",
                        description:
                          "Monitoring and evaluation instruments are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of evaluation forms, survey instruments, checklists, and assessment templates used in SAS program monitoring.",
                      },
                      {
                        label: "S.4",
                        description:
                          "There is adequate funding for the conduct of SAS researches and monitoring and evaluation.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved budget allocations for SAS research and M&E activities; financial reports showing fund utilization.",
                      },
                      {
                        label: "I.1",
                        description:
                          "Researches on student affairs and services are conducted.",
                        category: Category.SYSTEM,
                        evidence:
                          "Completed research studies on student services; research reports and abstracts; documentation of faculty/staff/student participation in SAS research.",
                      },
                      {
                        label: "I.2",
                        description:
                          "Research results and outputs are disseminated and utilized.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of published research papers, conference presentations, and institutional reports; documentation of program improvements based on research findings.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Regular monitoring and evaluation on the implementation of student services are conducted.",
                        category: Category.SYSTEM,
                        evidence:
                          "Periodic monitoring reports; evaluation summaries; meeting minutes showing assessment of student services implementation.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Monitoring and evaluation instruments are developed, reviewed, and continuously improved.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of M&E instrument development and revision; versions of survey/checklist forms; documentation of pilot testing and feedback integration.",
                      },
                      {
                        label: "I.5",
                        description:
                          "Reports are filed and submitted regularly to CHEDRO.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of submitted SAS monitoring and research reports to CHED Regional Office; acknowledgment receipts or submission confirmations.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Research outputs are presented and published.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of research presentations, published papers in journals, conference proceedings, and institutional newsletters or bulletins.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area V",
            description: "Support to Students",
            weight: 5,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Priorities and Relevance",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution's research agenda is in consonance with institutional, regional and national priorities concerned such as DOST, CHED National Higher Education Research Agenda, NEDA, etc.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copy of the approved institutional research agenda; CHED NHERA documents; DOST and NEDA regional priority listings; alignment matrix showing correspondence of institutional and national research thrusts.",
                      },
                      {
                        label: "S.2",
                        description:
                          "The institution has an approved Research Manual.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved and updated Research Manual; Board Resolution approving the manual; copy of Research Manual dissemination record to faculty and staff.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The approved Research Agenda is implemented.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of ongoing and completed research projects based on the approved agenda; annual research implementation reports; monitoring and evaluation results.",
                      },
                      {
                        label: "I.2.1",
                        description:
                          "The following stakeholders participate in the formulation of research agenda as bases for identifying institutional thrusts and priorities: administrators.",
                        category: Category.SYSTEM,
                        evidence:
                          "Minutes of research planning meetings attended by administrators; attendance sheets; signed consultation reports from administrative offices.",
                      },
                      {
                        label: "I.2.2",
                        description:
                          "The following stakeholders participate in the formulation of research agenda as bases for identifying institutional thrusts and priorities: faculty.",
                        category: Category.SYSTEM,
                        evidence:
                          "Consultation meeting minutes with faculty participants; research needs survey forms completed by faculty; focus group discussion documentation.",
                      },
                      {
                        label: "I.2.3",
                        description:
                          "The following stakeholders participate in the formulation of research agenda as bases for identifying institutional thrusts and priorities: students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Survey results or focus group discussions with student representatives; signed attendance in research consultation workshops; student organization feedback forms.",
                      },
                      {
                        label: "I.2.4",
                        description:
                          "The following stakeholders participate in the formulation of research agenda as bases for identifying institutional thrusts and priorities: government agency representatives (DOST, CHED, NEDA, etc.).",
                        category: Category.SYSTEM,
                        evidence:
                          "Invitation letters and attendance sheets from research consultation meetings involving government agencies; memorandum of cooperation with DOST, CHED, or NEDA; consultation documentation reports.",
                      },
                      {
                        label: "I.2.5",
                        description:
                          "The following stakeholders participate in the formulation of research agenda as bases for identifying institutional thrusts and priorities: other stakeholders (alumni, parents, etc.).",
                        category: Category.SYSTEM,
                        evidence:
                          "Minutes of meetings or consultation forms involving alumni and parent groups; signed attendance logs; feedback forms summarizing stakeholder inputs.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Action researches to test theory in practice are conducted by faculty and students.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved action research proposals; abstracts and reports of completed faculty and student action research; documentation of classroom-based research projects.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Team/collaborative and interdisciplinary research is encouraged.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records of collaborative research proposals; team composition lists showing multiple disciplines; faculty collaboration agreements and outputs.",
                      },
                      {
                        label: "I.5",
                        description:
                          "Research outputs are published in refereed national and/or international journals.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of published articles; list of research publications with journal titles and indexing information; certificates of publication acceptance; publication database records.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Priority researches are identified and conducted.",
                        category: Category.SYSTEM,
                        evidence:
                          "Annual list of priority research topics and their completion reports; research agenda tracking reports; documentation of priority-based research funding allocations.",
                      },
                      {
                        label: "O.2",
                        description: "Research results are published.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of institutional research journals; published research compendiums; institutional repository or website links to published studies; list of faculty and student publications.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Funding and Other Resources",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has an approved and adequate budget for research.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved annual budget documents, General Appropriations Act (GAA) or institutional budget allocation showing research funding, and budget utilization reports.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "There are provisions for the facilities and equipment such as Internet, statistical software, and other ICT resources.",
                        category: Category.SYSTEM,
                        evidence:
                          "Inventory of research facilities and ICT resources, software license records (e.g., SPSS, NVivo), and ICT service agreements for research use.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "There are provisions for the research staff.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of research staff with appointment papers, job descriptions, and payroll or employment contracts funded by the research budget.",
                      },
                      {
                        label: "S.2.3",
                        description:
                          "There are provisions for the supplies and materials.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved procurement requests, purchase orders, and inventory records of research supplies and materials.",
                      },
                      {
                        label: "S.2.4",
                        description: "There are provisions for the workplace.",
                        category: Category.SYSTEM,
                        evidence:
                          "Photos and floor plans of research offices/laboratories, maintenance reports, and office assignment records for researchers.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The institution allocates adequate funds for the conduct of faculty and student research.",
                        category: Category.SYSTEM,
                        evidence:
                          "Financial statements showing research budget allocation, disbursement vouchers for research grants, and records of funded faculty/student research projects.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The institution establishes linkages with the local/national/international agencies for funding support and assistance.",
                        category: Category.SYSTEM,
                        evidence:
                          "MOAs/MOUs with funding agencies, partnership agreements, and documentation of grant-funded collaborative projects.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The institution maintains a functional and long-range program of faculty/staff development to enhance research capability and competence.",
                        category: Category.SYSTEM,
                        evidence:
                          "Faculty development plans, training attendance records, scholarship/grant approvals, and annual development program reports.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The institution encourages the conduct of externally funded researches.",
                        category: Category.SYSTEM,
                        evidence:
                          "Notices of external research funding calls, proposals submitted to funding agencies, and records of approved externally funded research projects.",
                      },
                      {
                        label: "O.1",
                        description:
                          "The Research Program is adequately funded.",
                        category: Category.SYSTEM,
                        evidence:
                          "Consolidated budget reports, audited financial statements showing sufficient research funds, and accomplishment reports indicating funded activities.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description:
                    "Implementation, Monitoring, Evaluation and Utilization of Research Results/Outputs",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "There is a system of implementation, monitoring, evaluation and utilization of research outputs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved research monitoring and evaluation framework, research utilization plan, and reports of implemented research outputs.",
                      },
                      {
                        label: "S.2",
                        description:
                          "The institution has a policy on Intellectual Property Rights (IPR).",
                        category: Category.SYSTEM,
                        evidence:
                          "Copy of the institutional IPR policy, CHED-recognized IPR guidelines, and approved Board Resolution adopting IPR policy.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The institution/College/Academic Unit has a Research Unit managed by competent staff.",
                        category: Category.SYSTEM,
                        evidence:
                          "Organizational chart of the Research Unit, appointment papers of research staff, and staff qualification records.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The Research Manual provides guidelines and procedures for the administration and conduct of research.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copy of the institutional Research Manual, table of contents highlighting guidelines, and dissemination records to faculty and students.",
                      },
                      {
                        label: "I.3",
                        description:
                          "The faculty conduct applied and operational researches in their fields of specialization in accordance with the thrusts and priorities of the program/institution.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of completed and ongoing research projects aligned with institutional thrusts, research proposals, and faculty research reports.",
                      },
                      {
                        label: "I.4",
                        description:
                          "The institution provides incentives to faculty researchers such as honoraria, service credits, deloading, etc.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional incentive policy, sample computation of honoraria, and approved faculty deloading schedules.",
                      },
                      {
                        label: "I.5",
                        description:
                          "The College/Academic Unit requires its students to conduct research, as a course requirement, (whenever applicable).",
                        category: Category.SYSTEM,
                        evidence:
                          "Course syllabi with research requirements, sample student research outputs, and thesis/dissertation completion reports.",
                      },
                      {
                        label: "I.6",
                        description:
                          "The institution provides opportunities for advanced studies and/or training to enhance faculty/staff research competence.",
                        category: Category.SYSTEM,
                        evidence:
                          "Scholarship documents, training attendance certificates, and faculty development program records.",
                      },
                      {
                        label: "I.7",
                        description:
                          "Completed and on-going research studies are periodically monitored and evaluated in local and regional in-house reviews.",
                        category: Category.SYSTEM,
                        evidence:
                          "Minutes and evaluation forms from in-house reviews, schedules of monitoring visits, and summary reports of research evaluations.",
                      },
                      {
                        label: "I.8.1",
                        description:
                          "Research outputs are utilized as inputs in institutional development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional plans citing research-based improvements, utilization reports, and memos on research-informed policy updates.",
                      },
                      {
                        label: "I.8.2",
                        description:
                          "Research outputs are utilized as inputs in the improvement of instructional processes.",
                        category: Category.SYSTEM,
                        evidence:
                          "Curriculum review reports, teaching guides integrating research findings, and documentation of classroom innovation based on research.",
                      },
                      {
                        label: "I.8.3",
                        description:
                          "Research outputs are utilized as inputs in the transfer of generated technology/knowledge to the community.",
                        category: Category.SYSTEM,
                        evidence:
                          "Extension activity reports, MOAs with partner communities, and photos of community training on research-based technologies.",
                      },
                      {
                        label: "I.9",
                        description:
                          "Packaged technologies and new information are disseminated to the target clientele through appropriate delivery systems.",
                        category: Category.SYSTEM,
                        evidence:
                          "Technology packaging documents, brochures, training materials, and documentation of dissemination activities.",
                      },
                      {
                        label: "I.10.1",
                        description:
                          "The institution ensures that research outputs are protected by IPR laws.",
                        category: Category.SYSTEM,
                        evidence:
                          "Patent and copyright registration documents, IPR compliance reports, and researcher orientation materials on IPR protection.",
                      },
                      {
                        label: "I.10.2",
                        description:
                          "The institution ensures that faculty and students observe research ethics to avoid malpractices like plagiarism, fabrication of data, etc.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copy of institutional Research Ethics Policy, plagiarism check reports, ethics clearance certificates, and ethics training attendance lists.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Implementation, monitoring, evaluation and research utilization of outputs are effective.",
                        category: Category.SYSTEM,
                        evidence:
                          "Summary of evaluation results, monitoring reports, feedback from beneficiaries, and evidence of applied or adopted research outputs.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Publication and Dissemination",
                  indicator: {
                    create: [
                      {
                        label: "S.1",
                        description:
                          "The institution has an approved and copyrighted Research Journal.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copy of ISSN registration, Certificate of Copyright from the National Library, Approved Journal Editorial Board, and CHED recognition documents.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "The institution has incentives for paper presentations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved faculty incentive policy, payroll records showing presentation honoraria, and list of faculty who received incentives for paper presentations.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "The institution has incentives for journal publication.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional research incentive guidelines, approved budget for journal publication incentives, and disbursement vouchers for published papers.",
                      },
                      {
                        label: "S.2.3",
                        description:
                          "The institution has incentives for outstanding research related performance.",
                        category: Category.SYSTEM,
                        evidence:
                          "Award policies, criteria for best researcher award, and documentation of recognition ceremonies for top researchers.",
                      },
                      {
                        label: "S.2.4",
                        description:
                          "The institution has incentives for patented outputs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Patent incentive policy, copies of awarded patents, and records of incentive disbursement to inventors.",
                      },
                      {
                        label: "I.1",
                        description:
                          "The institution provides opportunities for the dissemination of research results in fora, conferences, seminars, and other related means.",
                        category: Category.SYSTEM,
                        evidence:
                          "Programs, invitation letters, attendance sheets, and photos of research forums and conferences.",
                      },
                      {
                        label: "I.2",
                        description:
                          "The institution regularly publishes a research journal.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of published research journals, publication schedules, and online repository links.",
                      },
                      {
                        label: "I.3",
                        description:
                          "Library exchange of research publications with other HEI's and agencies is maintained.",
                        category: Category.SYSTEM,
                        evidence:
                          "Memoranda of Agreement (MOA) with other HEIs, exchange records, and acknowledgment letters of received journals.",
                      },
                      {
                        label: "I.4",
                        description:
                          "Research manuscripts/technical reports are well-written, and edited following the institutional format.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional research format guide, samples of edited manuscripts, and editing approval forms.",
                      },
                      {
                        label: "I.5.1",
                        description:
                          "The institution supports the researchers in all of the following activities such as Instructional Materials Development.",
                        category: Category.SYSTEM,
                        evidence:
                          "Training certificates, project proposals for IM development, and completed instructional materials developed by faculty.",
                      },
                      {
                        label: "I.5.2",
                        description:
                          "The institution supports the researchers in all of the following activities such as paper presentations, journal publication, classroom lectures, and other similar activities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Travel orders, reimbursement documents, and certificates of presentation/publication.",
                      },
                      {
                        label: "I.5.3",
                        description:
                          "The institution supports the researchers in all of the following activities such as editorship/writing in academic, scientific and professional journals.",
                        category: Category.SYSTEM,
                        evidence:
                          "Appointment letters as journal editors, editorial board records, and acknowledgment letters from publishing bodies.",
                      },
                      {
                        label: "I.5.4",
                        description:
                          "The institution supports the researchers in all of the following activities such as thesis/dissertation advising.",
                        category: Category.SYSTEM,
                        evidence:
                          "Official list of thesis/dissertation advisers, adviser appointment letters, and faculty workload documentation.",
                      },
                      {
                        label: "I.5.5",
                        description:
                          "The institution supports the researchers in all of the following activities such as patenting of research outputs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Patent application forms, DOST-IPOPHL correspondence, and institutional assistance records for patenting.",
                      },
                      {
                        label: "I.6",
                        description:
                          "Research results are published preferably in refereed journals.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of publications in refereed journals, journal impact factors, and copies of published research papers.",
                      },
                      {
                        label: "I.7",
                        description:
                          "Research results are disseminated to the target clientele.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dissemination reports, feedback forms from target beneficiaries, and documentation of research utilization seminars.",
                      },
                      {
                        label: "I.8",
                        description:
                          "The College/Academic Unit generates income from patents, licenses, copyrights, and other research outputs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Financial reports on royalties, MOAs with licensees, and official receipts of income generated from research outputs.",
                      },
                      {
                        label: "O.1",
                        description:
                          "Research outputs are published in refereed journals.",
                        category: Category.SYSTEM,
                        evidence:
                          "Copies of published papers in refereed journals, author publication certificates, and indexing records (Scopus, CHED-recognized).",
                      },
                      {
                        label: "O.2",
                        description: "Research outputs are utilized.",
                        category: Category.SYSTEM,
                        evidence:
                          "Utilization reports, testimonials from end-users, and documentation of implemented research projects.",
                      },
                      {
                        label: "O.3",
                        description:
                          "Patented and copyrighted research outputs are commercialized.",
                        category: Category.SYSTEM,
                        evidence:
                          "Commercialization agreements, sales reports, and records of technology transfer or licensing arrangements.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area VI",
            description: "Extension and Community Involvement",
            weight: 4,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Priorities and Relevance",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The extension agenda is in consonance of local, regional and national development thrusts and priorities.",
                        category: Category.SYSTEM,
                        evidence:
                          "Institutional Extension Program, Annual Reports.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The College/Academic Unit of Industrial Technology has a benchmark survey of the problems, needs priorities and resources of the community.",
                        category: Category.SYSTEM,
                        evidence: "Needs Assessment / Survey Results. ",
                      },
                      {
                        label: "S.3.",
                        description: "The extension program reflects the VMGO.",
                        category: Category.SYSTEM,
                        evidence: "Institutional Extension Program.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "There is a pool of consultants/experts from various disciplines to serve in extension projects and activities.",
                        category: Category.SYSTEM,
                        evidence: "Roster of Consultants/Experts.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "The institution has an approved and copyrighted Extension Manual.",
                        category: Category.SYSTEM,
                        evidence: "Extension Manual.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The extension projects and activities implemented are based on the results of the benchmark survey.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Needs Assessment + Extension Activity Reports.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The extension projects and activities complement the curriculum of the Industrial Technology program under review.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Extension Program + Activity Reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "A mutual exchange of resources and services between the College/Academic Unit and the community is evident.",
                        category: Category.IMPLEMENTATION,
                        evidence: "MOAs + Activity Reports + Photos.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "Linkages with local, national, foreign, and non-governmental agencies are institutionalized.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Community Linkages documents + MOAs.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "Priority and relevant extension projects and activities are conducted.",
                        category: Category.OUTCOME,
                        evidence:
                          "Annual Reports + Extension Activity Reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description:
                    "Planning, Implementation, Monitoring and Evaluation",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "There is a distinct office that manages the Extension Program.",
                        category: Category.SYSTEM,
                        evidence:
                          "Organizational set-up of extension office/unit.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "Instruments for monitoring and evaluation are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Monitoring and Evaluation Reports + Extension Manual.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The administration, faculty, students and other stakeholders of the Colllege/Academic Unit of Industrial Technology participate in the planning and organization of Extension Program.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Activity Reports + Needs Assessment.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The administrators, faculty and students are involved in the implementation and  dissemination of extension programs.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Photos of activities + Activity Reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The extension projects and activites serve varied clientele.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Activity Reports + Monitoring Reports.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The conduct of extension projects and activities is sustainable.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Multi-year Annual Reports + Budgetary Allocation.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "Technologies/new knowledge are disseminated to the target clientele through appropriate extension delivery systems.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Packaged Technologies + Photos + Activity Reports.",
                      },
                      {
                        label: "I.6.1",
                        description:
                          "The extension activites are documented in the form of pamphlets.",
                        category: Category.IMPLEMENTATION,
                        evidence: " Samples of Pamphlets.",
                      },
                      {
                        label: "I.6.2",
                        description:
                          "The extension activites are documented in the form of flyers.",
                        category: Category.IMPLEMENTATION,
                        evidence: " Samples of Flyers. ",
                      },
                      {
                        label: "I.6.3",
                        description:
                          "The extension activites are documented in the form of bulletins.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Samples of Bulletins.",
                      },
                      {
                        label: "I.6.4",
                        description:
                          "The extension activites are documented in the form of newsletters.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Samples of Newsletters.",
                      },
                      {
                        label: "I.6.5",
                        description:
                          "The extension activites are documented in the form of electronic resources.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Samples of Electronic Resources.",
                      },
                      {
                        label: "I.7",
                        description:
                          "Periodic monitoring and evaluation of extension projects and activites are conducted.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Monitoring and Evaluation Reports.",
                      },
                      {
                        label: "I.8",
                        description:
                          "Results of monitoring and evaluation are disseminated and discussed with concerned stakeholders.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Monitoring & Evaluation Reports with minutes of meetings.",
                      },
                      {
                        label: "I.9",
                        description:
                          "Re-planning of activites based on feedback is conducted.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Monitoring & Evaluation Reports + Revised Activity Plans ",
                      },
                      {
                        label: "I.10",
                        description:
                          "Accomplishment and terminal reports are filed and submitted on time.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Extension Activity Reports + Accomplishment Reports ",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The Extension Program is well-planned, implemented, monitored, evaluated and disseminated.",
                        category: Category.OUTCOME,
                        evidence:
                          "Combination of all documents above (Program, Reports, Monitoring & Evaluation, Samples).",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The Extension Program has contributed to the improvement on the quality of life of the target clientele/benificiaries.",
                        category: Category.OUTCOME,
                        evidence:
                          "Monitoring and Evaluation Reports + Testimonials in Reports. ",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description: "Funding and Other Resources",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "There is an approved and adequate budget for extension.",
                        category: Category.SYSTEM,
                        evidence: "Budgetary Allocation for extension.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "There is a provision of facilities and equipment such as internet and other ICT resources.",
                        category: Category.SYSTEM,
                        evidence: "Inventory records, Photos of equipment.",
                      },
                      {
                        label: "S.2.2",
                        description: "There is a provision of extension staff.",
                        category: Category.SYSTEM,
                        evidence: "Organizational set-up + Staff roster.",
                      },
                      {
                        label: "S.2.3",
                        description:
                          "There is a provision of supplies and materials.",
                        category: Category.SYSTEM,
                        evidence: "Budgetary allocation + Procurement records.",
                      },
                      {
                        label: "S.2.4",
                        description: "There is a provision of workplace.",
                        category: Category.SYSTEM,
                        evidence:
                          "Organizational set-up (office location) + Photos.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The budget for the extension program is utilized as planned.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Budgetary reports + Financial statements.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Honoraria and other incentives (deloading, credit unit equivalent, etc.) to faculty invovled in extension work are granted.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "MOAs / Institutional Policies + Payroll documents.",
                      },
                      {
                        label: "I.3.1",
                        description:
                          "The College/Academic Unit of Industrial Technology sources out the following from other agencies additional funding.",
                        category: Category.IMPLEMENTATION,
                        evidence: "MOAs + Annual Reports.",
                      },
                      {
                        label: "I.3.2",
                        description:
                          "The College/Academic Unit of Industrial Technology sources out the following from other agencies technical assistance and service inputs.",
                        category: Category.IMPLEMENTATION,
                        evidence: "MOAs + Roster of Consultants/Experts.",
                      },
                      {
                        label: "O.1.",
                        description: "The Extension Program adequately funded.",
                        category: Category.OUTCOME,
                        evidence:
                          "Budgetary Allocation + Financial reports for projects. ",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description:
                    "Community Involvement and Participation in the Instution's Activities",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "There is a strategy for involving the community, government and private agencies in the Extension Program.",
                        category: Category.SYSTEM,
                        evidence:
                          "Document policy + MOAs + Extension Org. Chart.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "The College/Academic Unit is commited to the service and development of the community, and initiates and maintains community development projects.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Extension Program + Activity Reports.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "The College/Academic Unit is commited to the service and development of the community, and involves the students, faculty, staff administrators in the projects.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Activity Photos + Reports with participant lists.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "The College/Academic Unit is commited to the service and development of the community, and coordinates its community programs and services with the target clientele.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Needs Assessment + Community Linkages docs.",
                      },
                      {
                        label: "I.2.1",
                        description:
                          "There is community participation and involvement in extension activites in planning.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Needs Assessment / Survey Results.",
                      },
                      {
                        label: "I.2.2",
                        description:
                          "There is community participation and involvement in extension activites in implementations and dissemination.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Activity Photos + Packaged Technologies.",
                      },
                      {
                        label: "I.2.3",
                        description:
                          "There is community participation and involvement in extension activites in monitoring and evaluation.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Monitoring & Evaluation Reports.",
                      },
                      {
                        label: "I.2.4",
                        description:
                          "There is community participation and involvement in extension activites in out-sourcing of funds, materials and other service inputs.",
                        category: Category.IMPLEMENTATION,
                        evidence: "MOAs + Annual Reports.",
                      },
                      {
                        label: "I.2.5",
                        description:
                          "There is community participation and involvement in extension activites in utilization of technology, knowledge learned, skills acquired from the extension projects and activites.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Photos + Monitoring Reports showing application.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "There is wholesome coordination between the Extension Program implementers and the target clientele/beneficiaries.",
                        category: Category.OUTCOME,
                        evidence:
                          "Community Linkages + MOAs + Positive Evaluation Reports.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area VII",
            description: "Library",
            weight: 5,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Administration",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The organizational structure of the library is well-defined.",
                        category: Category.SYSTEM,
                        evidence:
                          "Library Organizational Chart + Memorandum Circular on Library Committee.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The development of the library goals and objectives is the responsibility of the library head and staff with the approval of the Head of the institution.",
                        category: Category.SYSTEM,
                        evidence:
                          "Library Development Plan + Approved institutional documents.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "There is a Library Board/Committee which sets library policies, rules and procedures and periodically reviews them.",
                        category: Category.SYSTEM,
                        evidence:
                          "Composition and functions of Library Committee + Minutes of meetings.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "There is a duly approved and widely disseminated Library Manual or written policies and procedures covering the library's internal administration and operation.",
                        category: Category.SYSTEM,
                        evidence:
                          "Library Manual/Handbook + Dissemination records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The library develops an explicit statement of its goals and objectives in conformity with the mandate of the institution.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Library Development Plan + Institutional mandate documents.",
                      },
                      {
                        label: "I.2.1",
                        description:
                          "The library is administered and supervised by a full-time professional licensed librarian.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Library staff credentials + Appointment papers.",
                      },
                      {
                        label: "I.2.2",
                        description:
                          "The library is administered and supervised by at least a master's degree holder in MS Library and Information Science or MAEd/MA in Library Science.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Head Librarian credentials + Diplomas.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The Head Librarian directs and supervises the total operation of the library and is responsible for the administration of its resources and services.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Job description + Performance evaluation reports.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The Head Librarian, preferably with an academic rank, actively participates in the academic and administrative activities of the institution.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Attendance records in meetings + Committee memberships.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "The annual accomplishments and other reports of the library are promptly submitted to the higher offices concerned.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Annual reports + Submission records.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "A Library Development Plan is prepared in consultation with the institution's officials and stakeholders.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Library Development Plan + Consultation minutes.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The goals and objectives of the Library are satisfactorily attained.",
                        category: Category.OUTCOME,
                        evidence:
                          "Accomplishment reports + Performance evaluation.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The library organizational structure is well-designed and effectively implemented.",
                        category: Category.OUTCOME,
                        evidence:
                          "Organizational chart + Functional assessment reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Administrative Staff",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "The library has staff with BS in Library and Information Science for the College/Academic Unit Library.",
                        category: Category.SYSTEM,
                        evidence: "Staff credentials + Diplomas.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "The library has staff with MS in Library and Information Science or MAED/MA in Library Science for the Institution.",
                        category: Category.SYSTEM,
                        evidence: "Staff credentials + Diplomas.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "The library meets the required number of qualified and licensed librarians and staff with ratio of one (1) Licensed Librarian with two (2) full time staff for the first 500-student population.",
                        category: Category.SYSTEM,
                        evidence: "Staff plantilla + Student population data.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "The library meets the required number of qualified and licensed librarians and staff with ratio of one (1) additional full time Professional Librarian with one (1) full time staff for every additional 1,000 students.",
                        category: Category.SYSTEM,
                        evidence: "Staff plantilla + Student population data.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "There is a continuing staff development program with the corresponding financial assistance from the institution.",
                        category: Category.SYSTEM,
                        evidence:
                          "Staff development program + Budget allocation.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The library staff compensation, retirement, and fringe benefits, as well as other privileges, are granted in accordance with existing government laws and institutional policies.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Personnel records + Compensation documents.",
                      },
                      {
                        label: "O.1.",
                        description: "The librarians are qualified.",
                        category: Category.OUTCOME,
                        evidence:
                          "Credentials + Licenses + Performance evaluations.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description:
                    "Collection Development, Organization and Preservation",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "There is a written Collection Development Policy.",
                        category: Category.SYSTEM,
                        evidence: "Collection Development Policy document.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "There is a core collection of at least 5,000 titles for the Academic Unit Library.",
                        category: Category.SYSTEM,
                        evidence:
                          "Inventory of library holdings + Statistical reports.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "There is a core collection of at least 10,000 titles that support the instruction, research and other programs for an Institution Library.",
                        category: Category.SYSTEM,
                        evidence:
                          "Inventory of library holdings + Statistical reports.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "Twenty percent (20%) of the library holdings are of current edition, i.e. with copyright within the last 5 years.",
                        category: Category.SYSTEM,
                        evidence: "Inventory records + Acquisition reports.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "The Non-print, digital and electronic resources are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "List of electronic resources + Access records.",
                      },
                      {
                        label: "S.5.",
                        description: "There is an integrated library system.",
                        category: Category.SYSTEM,
                        evidence: "ILS documentation + System manuals.",
                      },
                      {
                        label: "S.6.",
                        description:
                          "There are provisions for the preservation, general care, and upkeep of library resources.",
                        category: Category.SYSTEM,
                        evidence: "Preservation policy + Maintenance records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The Collection Development Policy is regularly reviewed and evaluated by the Library Committee.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Meeting minutes + Review documents.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The library collection and services support the mission and vision of the Institution, goals of the College/Academic Unit and objectives of the Program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Collection analysis + Institutional VMGO documents.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The library provides sufficient research books and materials to supplement the clients' curricular needs.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Collection inventory + Curriculum documents.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The library maintains an extensive (15% of the total) Filipiniana collection.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Filipiniana collection inventory + Statistical reports.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "The library provides 3-5 book/journal titles for professional subjects in the major fields of specialization.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Professional books list + Course syllabi.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "The Library collection is organized according to an accepted scheme of classification and standard code of cataloging.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Classification system documentation + Catalog records.",
                      },
                      {
                        label: "I.7.",
                        description:
                          "Regular weeding-out program is conducted to maintain a relevant and updated collection.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Weeding records + Collection assessment reports.",
                      },
                      {
                        label: "I.8.",
                        description:
                          "The quality and quantity of library materials and resources conform with the standards set for a particular academic program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Standards compliance report + Collection assessment.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The library core collection is adequate, updated and well-balanced.",
                        category: Category.OUTCOME,
                        evidence:
                          "Collection analysis reports + Usage statistics.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The professional books, journals and electronic resources for the program are sufficient.",
                        category: Category.OUTCOME,
                        evidence:
                          "Resource inventory + User satisfaction surveys.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Services and Utilization",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The Library has information services pertinent to the institution's requirements.",
                        category: Category.SYSTEM,
                        evidence:
                          "Service portfolio + Institutional requirements documents.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "The following services/programs are provided: functional and interactive library web page.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Library website screenshot + Access statistics.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "The following services/programs are provided: integrated library system.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "ILS documentation + System operation records.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "The following services/programs are provided: on-line public access (OPAC).",
                        category: Category.IMPLEMENTATION,
                        evidence: "OPAC access records + User guides.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "The following services/programs are provided: circulation on-line.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Circulation records + System logs.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "The following services/programs are provided: computerized cataloging.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Cataloging records + System documentation.",
                      },
                      {
                        label: "I.1.6",
                        description:
                          "The following services/programs are provided: inventory reporting.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Inventory reports + System generated documents.",
                      },
                      {
                        label: "I.1.7",
                        description:
                          "The following services/programs are provided: serials control.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Serials management records + Subscription documents.",
                      },
                      {
                        label: "I.1.8",
                        description:
                          "The following services/programs are provided: internet searching.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Internet access records + Search assistance logs.",
                      },
                      {
                        label: "I.1.9",
                        description:
                          "The following services/programs are provided: CD-ROM.",
                        category: Category.IMPLEMENTATION,
                        evidence: "CD-ROM collection + Usage records.",
                      },
                      {
                        label: "I.1.10",
                        description:
                          "The following services/programs are provided: on-line database.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Database subscriptions + Access statistics.",
                      },
                      {
                        label: "I.1.11",
                        description:
                          "The following services/programs are provided: photocopying.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Photocopying service records + Equipment maintenance.",
                      },
                      {
                        label: "I.1.12",
                        description:
                          "The following services/programs are provided: bar coding.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Barcoding system + Inventory management records.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The library opens at least 54 hours per week for the College/Academic Unit or 60 hours per week for the Institution.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Library schedule + Opening hours log.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The library promotes and disseminates its program through a regular announcement of its new acquisitions of print materials (books, journals, magazines), resources, facilities, and services.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Announcement records + Promotion materials.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "Librarians and staff are available during library hours to assist and provide library services.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Staff schedule + Service logs.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "Statistical data on the utilization of various resources and services are compiled and used to improve the library collection and operations.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Usage statistics + Improvement plans.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The library services are efficiently and effectively provided.",
                        category: Category.OUTCOME,
                        evidence: "Service evaluation reports + User feedback.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The library users are satisfied with library services.",
                        category: Category.OUTCOME,
                        evidence:
                          "User satisfaction surveys + Feedback records.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter E",
                  description: "Physical Set-up and Facilities",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The library is strategically located and accessible to students, faculty and other clientele.",
                        category: Category.SYSTEM,
                        evidence:
                          "Campus map + Library location documentation.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The library is systematically planned to allow future expansion.",
                        category: Category.SYSTEM,
                        evidence: "Library development plan + Floor plans.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The size of the library meets standard requirements considering the present enrollment and future expansion.",
                        category: Category.SYSTEM,
                        evidence: "Floor area measurements + Enrollment data.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "The reading room can accommodate at least 10% of the school enrollment at any given time.",
                        category: Category.SYSTEM,
                        evidence:
                          "Seating capacity data + Enrollment statistics.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "Space is provided for print resources as well as work stations for electronic resources.",
                        category: Category.SYSTEM,
                        evidence: "Floor plan + Space allocation records.",
                      },
                      {
                        label: "S.6.",
                        description:
                          "Space is provided for the librarians' office, staff room, technical room, etc.",
                        category: Category.SYSTEM,
                        evidence: "Floor plan + Room allocation documentation.",
                      },
                      {
                        label: "S.7.",
                        description:
                          "Ramps for the physically disabled are provided.",
                        category: Category.SYSTEM,
                        evidence:
                          "Accessibility features documentation + Photos.",
                      },
                      {
                        label: "S.8.",
                        description:
                          "The library meets the required and standard-sized furniture and equipment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Furniture inventory + Standards compliance report.",
                      },
                      {
                        label: "S.9.1",
                        description:
                          "The following library furniture and equipment are available: adjustable/movable shelves.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.2",
                        description:
                          "The following library furniture and equipment are available: magazine display shelves.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.3",
                        description:
                          "The following library furniture and equipment are available: newspaper racks.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.4",
                        description:
                          "The following library furniture and equipment are available: standard tables and chairs.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.5",
                        description:
                          "The following library furniture and equipment are available: carrels for individual study.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.6",
                        description:
                          "The following library furniture and equipment are available: desks and chairs for staff.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.7",
                        description:
                          "The following library furniture and equipment are available: charging desk.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.8",
                        description:
                          "The following library furniture and equipment are available: dictionary stand.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.9",
                        description:
                          "The following library furniture and equipment are available: atlas stand.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.10",
                        description:
                          "The following library furniture and equipment are available: bulletin boards and display cabinets.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.11",
                        description:
                          "The following library furniture and equipment are available: vertical file cabinets.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.12",
                        description:
                          "The following library furniture and equipment are available: book racks.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.13",
                        description:
                          "The following library furniture and equipment are available: map stands/cabinets.",
                        category: Category.SYSTEM,
                        evidence: "Furniture inventory + Photos.",
                      },
                      {
                        label: "S.9.14",
                        description:
                          "The following library furniture and equipment are available: cardex/rotadex or any filing equipment for periodical records.",
                        category: Category.SYSTEM,
                        evidence: "Equipment inventory + Photos.",
                      },
                      {
                        label: "S.9.15",
                        description:
                          "The following library furniture and equipment are available: typewriters.",
                        category: Category.SYSTEM,
                        evidence: "Equipment inventory + Photos.",
                      },
                      {
                        label: "S.9.16",
                        description:
                          "The following library furniture and equipment are available: computers with printers.",
                        category: Category.SYSTEM,
                        evidence: "Equipment inventory + Photos.",
                      },
                      {
                        label: "S.10.",
                        description: "The library is well lighted.",
                        category: Category.SYSTEM,
                        evidence: "Lighting assessment + Maintenance records.",
                      },
                      {
                        label: "S.11.",
                        description: "The library is well-ventilated.",
                        category: Category.SYSTEM,
                        evidence:
                          "Ventilation system documentation + Maintenance records.",
                      },
                      {
                        label: "S.12.",
                        description: "The atmosphere is conducive to learning.",
                        category: Category.SYSTEM,
                        evidence: "Environmental assessment + User feedback.",
                      },
                      {
                        label: "S.13.",
                        description:
                          "Fire extinguishers and a local fire alarm system are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Safety equipment inventory + Inspection records.",
                      },
                      {
                        label: "S.14.",
                        description:
                          "The Library employs a system for security and control of library resources.",
                        category: Category.SYSTEM,
                        evidence:
                          "Security system documentation + Procedures manual.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "IT software and multi-media equipment are utilized.",
                        category: Category.IMPLEMENTATION,
                        evidence: "IT equipment inventory + Usage records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The environment in the library is conducive to learning.",
                        category: Category.OUTCOME,
                        evidence:
                          "User satisfaction surveys + Environmental assessment.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The library facilities are well-maintained and aesthetically designed.",
                        category: Category.OUTCOME,
                        evidence:
                          "Maintenance records + Facility assessment reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter F",
                  description: "Financial Support",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has a regular and realistic budget for the library.",
                        category: Category.SYSTEM,
                        evidence:
                          "Library budget documents + Institutional budget.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The Head Librarian and staff, in coordination with other officials of the institution, prepare and manage the annual library budget.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Budget preparation records + Meeting minutes.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "All fees and funds allocated for library resources and services are utilized solely for such purposes and are properly audited.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Financial reports + Audit documents.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Other sources of financial assistance are sought.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Grant applications + Donation records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The financial support from fiduciary, supplemental and external funds is adequate.",
                        category: Category.OUTCOME,
                        evidence:
                          "Budget allocation reports + Financial statements.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter G",
                  description: "Linkages",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The Library is on the mailing list of agencies, foundations, etc., for exchange of publications and other books and journals donations.",
                        category: Category.SYSTEM,
                        evidence: "Mailing lists + Exchange agreements.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "Linkages with other institutions and funding agencies are explored and established for purposes of enhancing library facilities and resources.",
                        category: Category.IMPLEMENTATION,
                        evidence: "MOAs + Partnership documents.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The library establishes consortia, networking and resource sharing with other institutions and library collaborative activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Consortium agreements + Resource sharing records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "Library resource sharing and linkages are well-established.",
                        category: Category.OUTCOME,
                        evidence:
                          "Partnership evaluation reports + Resource sharing statistics.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area VIII",
            description: "Physical Plant and Facilities",
            weight: 3,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Campus",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "There is a Site Development Plan, and program of implementation.",
                        category: Category.SYSTEM,
                        evidence:
                          "Campus development plan + Site development plan.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The Campus has accessible good roads and pathways.",
                        category: Category.SYSTEM,
                        evidence: "Campus map + Photos of roads and pathways.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The campus is in a well-planned, clean and properly landscaped environment.",
                        category: Category.SYSTEM,
                        evidence: "Campus photos + Landscaping plans.",
                      },
                      {
                        label: "S.4.1",
                        description:
                          "There is a system to ensure traffic safety in and outside the campus.",
                        category: Category.SYSTEM,
                        evidence: "Traffic management plan + Safety protocols.",
                      },
                      {
                        label: "S.4.2",
                        description:
                          "There is a system to ensure waste management program.",
                        category: Category.SYSTEM,
                        evidence: "Waste management program document.",
                      },
                      {
                        label: "S.4.3",
                        description:
                          "There is a system to ensure proper utilization, repair and upkeep of school facilities and equipment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Maintenance program + Facility management policies.",
                      },
                      {
                        label: "S.4.4",
                        description:
                          "There is a system to ensure cleanliness and orderliness of the school campus.",
                        category: Category.SYSTEM,
                        evidence: "Sanitation program + Cleaning schedules.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "An area for outdoor educational activities, e.g. social, physical, athletic, cultural, military training, etc. exists.",
                        category: Category.SYSTEM,
                        evidence: "Campus map + Photos of outdoor areas.",
                      },
                      {
                        label: "S.6.",
                        description:
                          "There is a campus security unit that ensures safety of the academic community.",
                        category: Category.SYSTEM,
                        evidence:
                          "Security office organization + Security personnel records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The site infrastructure development plan is implemented as planned.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Implementation reports + Progress photos.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The site plan is strategically displayed inside the campus indicating the location of the different buildings, driveways, parking areas, etc.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Displayed site plan photos + Campus signage.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The infrastructure development plan is implemented in accordance with approved zoning ordinances.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Zoning compliance certificates + Building permits.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "Covered walks are provided to protect the academic community from inclement weather.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Photos of covered walks + Construction documents.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "The institution implements a Waste Management Program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Waste management reports + Implementation records.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "The Maintenance Unit or its equivalent periodically inspects school facilities and equipment to ensure their proper utilization and upkeep.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Inspection reports + Maintenance logs.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The Campus environment is conducive to all educational activities.",
                        category: Category.OUTCOME,
                        evidence:
                          "User satisfaction surveys + Environmental assessment.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The site can accommodate its present school population and future expansion.",
                        category: Category.OUTCOME,
                        evidence: "Capacity analysis + Enrollment projections.",
                      },
                      {
                        label: "O.3.",
                        description: "The campus is safe and well-maintained.",
                        category: Category.OUTCOME,
                        evidence:
                          "Safety inspection reports + Maintenance records.",
                      },
                      {
                        label: "O.4.",
                        description:
                          "The campus is well-planned, clean and properly landscaped.",
                        category: Category.OUTCOME,
                        evidence: "Campus assessment reports + Photos.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Buildings",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The buildings meet all requirements of the Building Code. A Certificate of Occupancy for each building is conspicuously displayed.",
                        category: Category.SYSTEM,
                        evidence:
                          "Building permits + Certificate of Occupancy.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The buildings are constructed according to their respective uses.",
                        category: Category.SYSTEM,
                        evidence:
                          "Building plans + Function allocation documents.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The buildings are well-planned and appropriately located to provide for future expansion.",
                        category: Category.SYSTEM,
                        evidence: "Master plan + Expansion plans.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "Entry and exit points permit the use of the buildings for public and other functions with minimum interference to school activities.",
                        category: Category.SYSTEM,
                        evidence: "Floor plans + Traffic flow diagrams.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "Emergency exits are provided and properly marked.",
                        category: Category.SYSTEM,
                        evidence:
                          "Emergency exit plans + Photos of marked exits.",
                      },
                      {
                        label: "S.6.",
                        description:
                          "The buildings are equipped with emergency/fire escapes which are readily accessible.",
                        category: Category.SYSTEM,
                        evidence: "Fire escape plans + Inspection records.",
                      },
                      {
                        label: "S.7.",
                        description:
                          "The corridors, doorways, and alleys are well-constructed for better mobility.",
                        category: Category.SYSTEM,
                        evidence: "Building plans + Accessibility assessment.",
                      },
                      {
                        label: "S.8.",
                        description:
                          "The buildings are well-ventilated and lighted.",
                        category: Category.SYSTEM,
                        evidence:
                          "Ventilation and lighting plans + Inspection reports.",
                      },
                      {
                        label: "S.9.",
                        description:
                          "The buildings have facilities for persons with disability (PWDs) as provided by law.",
                        category: Category.SYSTEM,
                        evidence:
                          "PWD accessibility features + Compliance certificates.",
                      },
                      {
                        label: "S.10.",
                        description:
                          "There is a central signal and fire alarm system.",
                        category: Category.SYSTEM,
                        evidence:
                          "Fire alarm system documentation + Test records.",
                      },
                      {
                        label: "S.11.",
                        description:
                          "There are readily accessible and functional fire extinguishers and other fire-fighting equipment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Fire equipment inventory + Inspection records.",
                      },
                      {
                        label: "S.12.",
                        description:
                          "Bulletin boards, display boards, waste disposal containers and other amenities are strategically located inside the buildings.",
                        category: Category.SYSTEM,
                        evidence: "Amenities location plan + Photos.",
                      },
                      {
                        label: "S.13.",
                        description: "There are faculty rooms and offices.",
                        category: Category.SYSTEM,
                        evidence:
                          "Room allocation plan + Faculty room inventory.",
                      },
                      {
                        label: "S.14.",
                        description: "The buildings are insured.",
                        category: Category.SYSTEM,
                        evidence: "Insurance policies + Coverage documents.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The buildings are clean, well-maintained and free from vandalistic acts.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Maintenance records + Cleanliness inspection reports.",
                      },
                      {
                        label: "I.2.",
                        description: "Toilets are clean and well-maintained.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Toilet maintenance logs + Sanitation reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Electrical lines are safely installed and periodically checked.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Electrical inspection reports + Safety certificates.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "Water facilities are functional and well-distributed in all buildings.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Water system plans + Maintenance records.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "There is a periodic potability testing of drinking water.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Water quality test results + Testing schedule.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "Floor plans indicating fire exits and location of fire-fighting equipment, stand pipes, and other water sources are conspicuously displayed in each building.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Displayed floor plan photos + Emergency signage.",
                      },
                      {
                        label: "I.7.",
                        description:
                          "All school facilities are periodically subjected to pest control and inspection.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Pest control records + Inspection reports.",
                      },
                      {
                        label: "I.8.",
                        description:
                          "Smoking is strictly prohibited inside the campus.",
                        category: Category.IMPLEMENTATION,
                        evidence: "No-smoking policy + Signage photos.",
                      },
                      {
                        label: "I.9.",
                        description:
                          "Periodic drill on disaster and risk reduction (earthquake, flood, fire, etc.) is conducted.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Drill schedules + Participation records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The buildings and other facilities are safe, well-maintained and functional.",
                        category: Category.OUTCOME,
                        evidence:
                          "Safety inspection reports + Maintenance evaluation.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description: "Classrooms",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "Classroom size (1.5 sq.m. per student) meets standard specifications for instruction.",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom measurements + Capacity calculations.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The classrooms are well-lighted, ventilated and acoustically conditioned.",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom specifications + Environmental assessment.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The classrooms are adequate and are provided with enough chairs, furniture and equipment.",
                        category: Category.SYSTEM,
                        evidence: "Classroom inventory + Furniture count.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "There are sufficient supplies (chalkboards/whiteboards, and instructional materials) in each classroom.",
                        category: Category.SYSTEM,
                        evidence:
                          "Supplies inventory + Classroom equipment list.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The classrooms are clearly marked and arranged relative to their functions.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Room numbering system + Classroom photos.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The classrooms are well-maintained and free from interference.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Maintenance records + Classroom inspection reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Students cooperate in maintaining the cleanliness and orderliness of the classrooms.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student cleaning schedules + Classroom condition photos.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "Classrooms are adequate and conducive to learning.",
                        category: Category.OUTCOME,
                        evidence:
                          "Classroom utilization reports + User feedback.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Offices, Staff and Function Rooms",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The administrative offices are accessible to stakeholders.",
                        category: Category.SYSTEM,
                        evidence:
                          "Office location plan + Accessibility assessment.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The offices and staff rooms are clean, orderly and well-maintained.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Office maintenance records + Inspection reports.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Function rooms are properly equipped with necessary furniture and equipment.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Function room inventory + Equipment lists.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Staff rooms provide adequate space and facilities for faculty and staff.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Staff room assessment + Space allocation records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "Offices and function rooms are adequate and functional.",
                        category: Category.OUTCOME,
                        evidence:
                          "Utilization reports + User satisfaction surveys.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter E",
                  description: "Assembly, Athletic and Sports Facilities",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "Function rooms for holding meetings, conferences, convocations and similar activities are sufficient.",
                        category: Category.SYSTEM,
                        evidence:
                          "Function room inventory + Capacity analysis.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "Facilities for athletics sports, cultural activities, military training, etc. are accessible.",
                        category: Category.SYSTEM,
                        evidence:
                          "Sports facilities inventory + Location maps.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The seating capacity conforms to standards.",
                        category: Category.SYSTEM,
                        evidence:
                          "Seating capacity calculations + Standards compliance.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "There are adequate and well-marked entry and exit points.",
                        category: Category.SYSTEM,
                        evidence:
                          "Facility plans + Emergency exit documentation.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "There are storage facilities for athletic sports and other curricular training equipment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Storage facility inventory + Equipment lists.",
                      },
                      {
                        label: "I.1.1",
                        description:
                          "Indoor facilities are constructed with appropriate flooring.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Flooring specifications + Installation records.",
                      },
                      {
                        label: "I.1.2",
                        description:
                          "Indoor facilities are constructed with proper lighting and ventilation.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Lighting and ventilation systems + Maintenance records.",
                      },
                      {
                        label: "I.1.3",
                        description:
                          "Indoor facilities are constructed with safety measures.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Safety equipment inventory + Inspection reports.",
                      },
                      {
                        label: "I.1.4",
                        description:
                          "Indoor facilities are constructed with toilets.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Toilet facilities inventory + Maintenance logs.",
                      },
                      {
                        label: "I.1.5",
                        description:
                          "Indoor facilities are constructed with functional drinking facilities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Water facility inventory + Functionality checks.",
                      },
                      {
                        label: "I.1.6",
                        description:
                          "Indoor facilities are constructed with enough chairs.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Seating inventory + Capacity verification.",
                      },
                      {
                        label: "I.2.1",
                        description:
                          "The constructed outdoor facilities are free from hazards.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Safety inspection reports + Hazard assessment.",
                      },
                      {
                        label: "I.2.2",
                        description:
                          "The constructed outdoor facilities are suitably surfaced floor.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Surface material documentation + Installation records.",
                      },
                      {
                        label: "I.2.3",
                        description:
                          "The constructed outdoor facilities are appropriately laid out for a variety of activities.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Layout plans + Activity programming.",
                      },
                      {
                        label: "I.2.4",
                        description:
                          "The constructed outdoor facilities are properly maintained and secured.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Maintenance records + Security measures.",
                      },
                      {
                        label: "I.2.5",
                        description:
                          "The constructed outdoor facilities are installed with drainage system.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Drainage system plans + Maintenance logs.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Assembly, athletic sports and cultural facilities are sufficient and varied to meet the requirements of the institution.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Facility utilization reports + Program requirements.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "Audio-visual room and facilities with appropriate equipment are utilized in support of the teaching-learning such as but not limited to video/overhead/slide projector, sound system, LCD projectors and screens.",
                        category: Category.IMPLEMENTATION,
                        evidence: "AV equipment inventory + Usage records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "Indoor and outdoor facilities are well-equipped and properly maintained.",
                        category: Category.OUTCOME,
                        evidence:
                          "Facility assessment reports + Maintenance evaluation.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter F",
                  description: "Medical and Dental Clinic",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The Medical and Dental Clinic has basic facilities such as: reception area, records section, examination/treatment room and toilets.",
                        category: Category.SYSTEM,
                        evidence: "Clinic floor plan + Facility inventory.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The institution has functional medical and dental section/area.",
                        category: Category.SYSTEM,
                        evidence:
                          "Clinic organization chart + Service documentation.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "Potable water is available and sufficient.",
                        category: Category.SYSTEM,
                        evidence:
                          "Water quality test results + Supply assessment.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "Medical and dental equipment are provided.",
                        category: Category.SYSTEM,
                        evidence:
                          "Medical equipment inventory + Dental equipment list.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "There are enough medical and dental supplies and materials.",
                        category: Category.SYSTEM,
                        evidence: "Supplies inventory + Replenishment records.",
                      },
                      {
                        label: "S.6.",
                        description:
                          "Storage facilities (refrigerator, steel cabinets, etc.) are available.",
                        category: Category.SYSTEM,
                        evidence: "Storage equipment inventory + Photos.",
                      },
                      {
                        label: "S.7.",
                        description:
                          "Medical and dental supplies and materials are properly labeled.",
                        category: Category.SYSTEM,
                        evidence: "Labeling system documentation + Photos.",
                      },
                      {
                        label: "S.8.1",
                        description:
                          "The following basic medical equipment and medicines are all available: emergency medicines.",
                        category: Category.SYSTEM,
                        evidence:
                          "Emergency medicine inventory + Expiry monitoring.",
                      },
                      {
                        label: "S.8.2",
                        description:
                          "The following basic medical equipment and medicines are all available: ambobag.",
                        category: Category.SYSTEM,
                        evidence: "Equipment inventory + Maintenance records.",
                      },
                      {
                        label: "S.8.3",
                        description:
                          "The following basic medical equipment and medicines are all available: oxygen tank.",
                        category: Category.SYSTEM,
                        evidence: "Oxygen tank inventory + Safety checks.",
                      },
                      {
                        label: "S.8.4",
                        description:
                          "The following basic medical equipment and medicines are all available: intravenous fluid.",
                        category: Category.SYSTEM,
                        evidence: "IV fluid inventory + Storage conditions.",
                      },
                      {
                        label: "S.8.5",
                        description:
                          "The following basic medical equipment and medicines are all available: sphygmomanometer (at least 2 sets).",
                        category: Category.SYSTEM,
                        evidence: "Equipment inventory + Calibration records.",
                      },
                      {
                        label: "S.8.6",
                        description:
                          "The following basic medical equipment and medicines are all available: thermometer (at least 10 pcs).",
                        category: Category.SYSTEM,
                        evidence:
                          "Thermometer inventory + Calibration records.",
                      },
                      {
                        label: "S.8.7",
                        description:
                          "The following basic medical equipment and medicines are all available: diagnostic sets.",
                        category: Category.SYSTEM,
                        evidence:
                          "Diagnostic equipment inventory + Maintenance logs.",
                      },
                      {
                        label: "S.8.8",
                        description:
                          "The following basic medical equipment and medicines are all available: stethoscope (at least 2 units).",
                        category: Category.SYSTEM,
                        evidence:
                          "Stethoscope inventory + Condition assessment.",
                      },
                      {
                        label: "S.8.9",
                        description:
                          "The following basic medical equipment and medicines are all available: treatment cart.",
                        category: Category.SYSTEM,
                        evidence:
                          "Treatment cart inventory + Maintenance records.",
                      },
                      {
                        label: "S.8.10",
                        description:
                          "The following basic medical equipment and medicines are all available: nebulizer.",
                        category: Category.SYSTEM,
                        evidence: "Nebulizer inventory + Functionality checks.",
                      },
                      {
                        label: "S.9.1",
                        description:
                          "The following basic dental equipment and apparatuses are available: dental chair.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dental chair inventory + Maintenance records.",
                      },
                      {
                        label: "S.9.2",
                        description:
                          "The following basic dental equipment and apparatuses are available: autoclave (sterilizer).",
                        category: Category.SYSTEM,
                        evidence: "Sterilizer inventory + Calibration records.",
                      },
                      {
                        label: "S.9.3",
                        description:
                          "The following basic dental equipment and apparatuses are available: medical supplies.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dental supplies inventory + Replenishment system.",
                      },
                      {
                        label: "S.9.4",
                        description:
                          "The following basic dental equipment and apparatuses are available: filling instruments.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dental instruments inventory + Sterilization logs.",
                      },
                      {
                        label: "S.9.5",
                        description:
                          "The following basic dental equipment and apparatuses are available: basic instruments (forceps, mouth mirror, cotton fliers, explorer, etc).",
                        category: Category.SYSTEM,
                        evidence:
                          "Basic instruments inventory + Condition assessment.",
                      },
                      {
                        label: "S.10.",
                        description:
                          "The Medical/Dental Clinic has ample space, adequate lighting and ventilation.",
                        category: Category.SYSTEM,
                        evidence:
                          "Clinic space assessment + Environmental evaluation.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The Medical and Dental Clinics are managed by qualified medical and dental officers.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Medical staff credentials + Appointment documents.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Distinct rooms and storage areas are properly labeled.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Room labeling photos + Storage organization.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Medical and dental services are regularly monitored and evaluated.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Service evaluation reports + Patient feedback.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The medical, dental clinic and services are functional.",
                        category: Category.OUTCOME,
                        evidence:
                          "Service utilization reports + Functionality assessment.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter G",
                  description: "Student Center",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has a Student Center with supplies and materials.",
                        category: Category.SYSTEM,
                        evidence: "Student Center inventory + Supplies list.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "Policies and guidance on the proper utilization of Student Center are in place.",
                        category: Category.SYSTEM,
                        evidence: "Student Center policies + Usage guidelines.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The Student Center is well-lighted and ventilated.",
                        category: Category.SYSTEM,
                        evidence:
                          "Lighting and ventilation assessment + Maintenance records.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "A conference room is available for students' use.",
                        category: Category.SYSTEM,
                        evidence: "Conference room inventory + Booking system.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "There are facilities and equipment for table games, music appreciation, and TV or video viewing.",
                        category: Category.SYSTEM,
                        evidence:
                          "Recreation equipment inventory + Maintenance logs.",
                      },
                      {
                        label: "S.6.",
                        description:
                          "Clean and sanitary toilets, for men separate from those of women are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Toilet facility inventory + Sanitation reports.",
                      },
                      {
                        label: "S.7.",
                        description:
                          "Toilet fixtures for students with special needs and PWD's are provided.",
                        category: Category.SYSTEM,
                        evidence:
                          "Accessible toilet inventory + PWD compliance.",
                      },
                      {
                        label: "S.8.",
                        description:
                          "There are offices for student leaders, the editorial staff of the student publication and the officers of other student organizations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Office allocation plan + Student organization records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "Student activities at the Student Center are regularly conducted and monitored.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Activity schedules + Monitoring reports.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The Student Center is properly maintained.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Maintenance records + Cleanliness inspection.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The Student Center is fully equipped and functional.",
                        category: Category.OUTCOME,
                        evidence:
                          "Equipment functionality assessment + Usage reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter H",
                  description: "Food Services/Canteen/Cafeteria",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The canteen/cafeteria is well-lighted, ventilated, screened and provided with potable water supply.",
                        category: Category.SYSTEM,
                        evidence:
                          "Canteen facility assessment + Water quality tests.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "There are enough cooking and preparatory equipment.",
                        category: Category.SYSTEM,
                        evidence:
                          "Kitchen equipment inventory + Maintenance records.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "There are enough serving tools and utensils.",
                        category: Category.SYSTEM,
                        evidence: "Utensils inventory + Sanitation records.",
                      },
                      {
                        label: "S.2.3",
                        description:
                          "There are enough cleaning supplies and materials.",
                        category: Category.SYSTEM,
                        evidence:
                          "Cleaning supplies inventory + Replenishment system.",
                      },
                      {
                        label: "S.2.4",
                        description:
                          "There are enough dining tables and chairs.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dining furniture inventory + Capacity calculation.",
                      },
                      {
                        label: "S.3.",
                        description: "Wash area and toilets are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Wash area inventory + Toilet facility assessment.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution requires business and sanitary permits for the operation of the Food Center/Cafeteria/Canteen.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Business permits + Sanitary permits.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Food served is varied, nutritious, safe and sold at affordable price.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Menu plans + Food safety certificates + Price lists.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The Food Center/Cafeteria/Canteen is well-managed by qualified and competent staff.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Staff credentials + Management records.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "Cleanliness and orderliness are enforced.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Cleanliness inspection reports + Sanitation logs.",
                      },
                      {
                        label: "I.5.",
                        description: "The food services are prompt.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Service evaluation + Customer feedback.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The Canteen/Cafeteria/Food Center is well-patronized.",
                        category: Category.OUTCOME,
                        evidence: "Patronage records + Revenue reports.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "The food services generate income for the institution.",
                        category: Category.OUTCOME,
                        evidence: "Financial reports + Income statements.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter I",
                  description: "Accreditation Center",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The Accreditation Center (AC) is accessible and conveniently located.",
                        category: Category.SYSTEM,
                        evidence:
                          "AC location plan + Accessibility assessment.",
                      },
                      {
                        label: "S.2.1",
                        description: "The AC has working tables and chairs.",
                        category: Category.SYSTEM,
                        evidence: "AC furniture inventory + Photos.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "The AC has cabinets for display and filing.",
                        category: Category.SYSTEM,
                        evidence:
                          "Storage furniture inventory + Organization system.",
                      },
                      {
                        label: "S.2.3",
                        description:
                          "The AC has good ventilation and lighting.",
                        category: Category.SYSTEM,
                        evidence:
                          "Environmental assessment + Maintenance records.",
                      },
                      {
                        label: "S.2.4",
                        description: "The AC has computer unit.",
                        category: Category.SYSTEM,
                        evidence:
                          "Computer equipment inventory + Functionality check.",
                      },
                      {
                        label: "S.2.5",
                        description: "The AC has toilets.",
                        category: Category.SYSTEM,
                        evidence:
                          "Toilet facility inventory + Maintenance records.",
                      },
                      {
                        label: "S.2.6",
                        description: "The AC has lounge.",
                        category: Category.SYSTEM,
                        evidence: "Lounge facility inventory + Photos.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The Institution/College/Academic Unit maintains the AC with the required resources, furniture, and documents.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "AC maintenance records + Resource inventory.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The AC is managed by a qualified and committed staff/faculty.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Staff credentials + Management documentation.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Required documents/information and exhibits are updated, systematically packaged and readily available.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Document management system + Availability check.",
                      },
                      {
                        label: "O.1.",
                        description: "The AC is well-equipped and managed.",
                        category: Category.OUTCOME,
                        evidence:
                          "AC assessment report + Management evaluation.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter J",
                  description: "Housing (optional)",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "There are dormitories and housing facilities for students, faculty and staff.",
                        category: Category.SYSTEM,
                        evidence: "Housing facility inventory + Capacity data.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "There is an Implementing Rules and Regulations (IRR) for in-campus housing services.",
                        category: Category.SYSTEM,
                        evidence: "Housing IRR document + Policy manual.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "There is a system of coordinating with LGU's on privately owned boarding houses.",
                        category: Category.SYSTEM,
                        evidence:
                          "Coordination mechanism + LGU partnership records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The housing facilities are functionally designed.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Housing design plans + Functionality assessment.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The housing facilities and surroundings are properly maintained and monitored.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Maintenance records + Monitoring reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The IRR on housing services is strictly followed (e.g. dormitory fees, etc.)",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Compliance records + Implementation reports.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The institution coordinates with LGU's and owners of private boarding houses.",
                        category: Category.IMPLEMENTATION,
                        evidence: "Coordination records + Meeting minutes.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The housing facilities are safe, habitable and well-maintained.",
                        category: Category.OUTCOME,
                        evidence:
                          "Safety inspection reports + Habitability assessment.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "There is wholesome coordination among the Institution, the LGU's and the owners of private boarding houses.",
                        category: Category.OUTCOME,
                        evidence:
                          "Partnership evaluation + Coordination assessment.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area IX",
            description: "Laboratories",
            weight: 4,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Laboratories, Shops and Facilities",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The laboratory layout conforms to acceptable standards (RA 6541 National Building Code of the Philippines/PD 856 'Code of Sanitation of the Philippines) and to particular needs of the Industrial Technology program.",
                        category: Category.SYSTEM,
                        evidence:
                          "Laboratory layout plans + Building code compliance certificates.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "Room lightings conform to the standard requirements of fluorescent bulbs relative to the size of the room.",
                        category: Category.SYSTEM,
                        evidence:
                          "Lighting specifications + Room measurement documents.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The laboratories are properly lighted and well-ventilated.",
                        category: Category.SYSTEM,
                        evidence:
                          "Lighting and ventilation assessment reports + Maintenance records.",
                      },
                      {
                        label: "S.4.",
                        description:
                          "Each laboratory room has at least two exit doors that open outward.",
                        category: Category.SYSTEM,
                        evidence:
                          "Laboratory floor plans + Emergency exit documentation.",
                      },
                      {
                        label: "S.5.",
                        description:
                          "There is a laboratory for shop work for specific technologies.",
                        category: Category.SYSTEM,
                        evidence:
                          "Shop laboratory inventory + Technology-specific facility plans.",
                      },
                      {
                        label: "S.6.",
                        description:
                          "There is a computer laboratory with at least 15 usable computer units.",
                        category: Category.SYSTEM,
                        evidence:
                          "Computer laboratory inventory + Equipment functionality records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "Furniture/equipment arrangement allows free flow of movement and enables students to work comfortably without interference from others.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Laboratory layout photos + Space utilization assessment.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Safety and precautionary measures are implemented.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Safety protocols + Implementation records + Inspection reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Usable fire extinguishers are accessible to staff and students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Fire extinguisher inventory + Accessibility assessment + Inspection records.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "Laboratory Operations Manuals for the faculty and students are provided in each laboratory.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Laboratory manuals + Distribution records + Usage logs.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "Demonstrations and training on the use of fire extinguishers, first-aid kit and other emergency measures are periodically conducted.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Training schedules + Participation records + Demonstration photos.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "A first-aid kit and charts for antidotes and neutralizing solutions are always available in each laboratory room.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "First-aid kit inventory + Safety chart documentation + Availability checks.",
                      },
                      {
                        label: "I.7.",
                        description:
                          "A student's access to a computer is at least 15 hours/semester/subject.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Computer usage logs + Access schedules + Utilization reports.",
                      },
                      {
                        label: "I.8.",
                        description:
                          "Appropriate laboratories for general education subjects are adequately equipped and well-maintained.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "General education lab inventory + Maintenance records + Equipment functionality.",
                      },
                      {
                        label: "I.9.",
                        description:
                          "A well-equipped Multimedia Center is maintained.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Multimedia center inventory + Equipment maintenance records + Usage logs.",
                      },
                      {
                        label: "I.10.",
                        description:
                          "Gas, water and electricity are utilized for class practicum activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Utility usage records + Practicum activity schedules + Safety inspections.",
                      },
                      {
                        label: "I.11.",
                        description:
                          "A demonstration table, equipped with sink, water, electrical and gas outlets, is available and utilized.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Demonstration table specifications + Usage records + Maintenance logs.",
                      },
                      {
                        label: "I.12.",
                        description:
                          "Laboratory supplies and equipment are kept in separate stock rooms.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Stock room organization plans + Storage system documentation + Inventory records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The laboratories and shops are well-equipped, functional and are conducive to learning.",
                        category: Category.OUTCOME,
                        evidence:
                          "Laboratory assessment reports + Equipment functionality tests + Student feedback.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Equipment, Supplies and Materials",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The equipment, instruments, and materials needed in the classrooms are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Classroom equipment inventory + Material availability records.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "Apparatuses, tools and materials conform to the specifications required for the subjects in accordance with the CMO of the program.",
                        category: Category.SYSTEM,
                        evidence:
                          "Equipment specifications + CMO compliance documentation + Quality assurance records.",
                      },
                      {
                        label: "S.3.",
                        description: "Varied computer software are available.",
                        category: Category.SYSTEM,
                        evidence:
                          "Software inventory + Licensing documentation + Availability records.",
                      },
                      {
                        label: "I.1.",
                        description: "Equipment are well-maintained.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Equipment maintenance logs + Service records + Calibration certificates.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Laboratory supplies and materials are wisely utilized.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Supply utilization reports + Consumption records + Inventory management.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "Licensed computer software are installed and utilized.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Software installation records + Usage logs + License compliance documentation.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The laboratory equipment, supplies and materials are sufficient and wisely utilized.",
                        category: Category.OUTCOME,
                        evidence:
                          "Equipment sufficiency assessment + Utilization analysis + Efficiency reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description: "Maintenance",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "A laboratory technician/assistant is available for the proper upkeep of the laboratory.",
                        category: Category.SYSTEM,
                        evidence:
                          "Technician employment records + Job descriptions + Availability schedules.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The institution has a Maintenance and Repair Department/Unit manned by skilled personnel who provide services on direct call.",
                        category: Category.SYSTEM,
                        evidence:
                          "Maintenance department organization + Staff credentials + Service protocols.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution keeps the laboratories neat and orderly.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Laboratory cleanliness records + Inspection reports + Maintenance schedules.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Laboratory supplies and materials are regularly replenished/replaced whenever applicable.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Supply replenishment records + Replacement schedules + Inventory management.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The inventory of laboratory equipment/facilities is systematically and periodically conducted.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Inventory schedules + Equipment counting records + System documentation.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The laboratory equipment/instruments are in good working condition and are periodically calibrated.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Equipment condition reports + Calibration schedules + Service records.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "All equipment are coded, listed and inventoried.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Equipment coding system + Master inventory list + Tracking records.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "Waste disposal is efficiently and effectively managed on campus.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Waste management protocols + Disposal records + Environmental compliance.",
                      },
                      {
                        label: "I.7.1",
                        description:
                          "The following are properly maintained by trained/appropriate personnel/technicians: natural science laboratory.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Natural science lab maintenance records + Technician training certificates.",
                      },
                      {
                        label: "I.7.2",
                        description:
                          "The following are properly maintained by trained/appropriate personnel/technicians: shops.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Shop maintenance records + Technician qualifications + Service logs.",
                      },
                      {
                        label: "I.7.3",
                        description:
                          "The following are properly maintained by trained/appropriate personnel/technicians: computer laboratory.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Computer lab maintenance records + IT staff credentials + Repair logs.",
                      },
                      {
                        label: "I.7.4",
                        description:
                          "The following are properly maintained by trained/appropriate personnel/technicians: multi-media center.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Multimedia center maintenance records + Technical staff qualifications.",
                      },
                      {
                        label: "I.7.5",
                        description:
                          "The following are properly maintained by trained/appropriate personnel/technicians: research facility.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Research facility maintenance records + Specialist credentials.",
                      },
                      {
                        label: "I.7.6",
                        description:
                          "The following are properly maintained by trained/appropriate personnel/technicians: general education laboratory.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "General education lab maintenance records + Technician schedules.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The laboratories and shops are functional and are properly maintained.",
                        category: Category.OUTCOME,
                        evidence:
                          "Functionality assessment reports + Maintenance evaluation + Performance metrics.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Special Provisions",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "Specific program requirements (listing of materials and equipment as per CMO) are in accordance with guidelines/policies embodied in issuances, e.g. CMOs.",
                        category: Category.SYSTEM,
                        evidence:
                          "CMO requirements documentation + Program compliance assessment + Policy alignment.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "There is an approved Project Procurement Management Plan (PPMP).",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved PPMP documents + Procurement planning records.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "There is an approved Annual Procurement Plan (APP) for laboratory equipment, supplies and materials.",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved APP documents + Budget allocation records + Procurement schedules.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution implements the special provisions as listed in the CMO.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Implementation records + Compliance reports + CMO requirement fulfillment.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The special provisions in the CMO of the program are complied with.",
                        category: Category.OUTCOME,
                        evidence:
                          "Compliance verification reports + CMO audit results + Implementation assessment.",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Area X",
            description: "Administration",
            weight: 5,
            parameter: {
              create: [
                {
                  label: "Parameter A",
                  description: "Organization",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has an organizational structure approved by the Board of Regents/Trustees (BOR/BOT).",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved organizational chart + BOR/BOT resolution.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "Every office/unit in the organizational structure has functions approved by the BOR/BOT.",
                        category: Category.SYSTEM,
                        evidence:
                          "Office function documents + BOR/BOT approval records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution is subdivided into administrative units in accordance with the organizational structure.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Administrative unit documentation + Organizational implementation records.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The functions, duties and responsibilities of administrative personnel/staff in each unit/office are identified and carried out.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Job descriptions + Performance records + Duty assignment documents.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The Board of Regents/Trustees is supportive with the growth and development of the institution.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "BOR/BOT meeting minutes + Support documentation + Development approvals.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The Academic and Administrative Councils exercise their powers and perform their functions.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Council meeting minutes + Decision records + Function implementation reports.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "The flow of communication among and within units/departments is observed.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Communication protocols + Memo distribution records + Feedback mechanisms.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The institution has a well-designed and functional organizational structure.",
                        category: Category.OUTCOME,
                        evidence:
                          "Organizational assessment reports + Structure functionality evaluation.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter B",
                  description: "Academic Administration",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The Dean/Academic Unit Head possesses the required educational qualification and experience needed to administer the College/Academic Unit.",
                        category: Category.SYSTEM,
                        evidence:
                          "Dean's credentials + Experience records + Appointment documents.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The Department Chair/s, or their equivalent has appropriate/relevant educational qualification and experience.",
                        category: Category.SYSTEM,
                        evidence:
                          "Department Chair credentials + Qualification documents + Experience records.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The Dean is assisted by Department Chair/s or their equivalent with appropriate/relevant educational qualification and experience.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Organizational support structure + Assistant qualifications + Delegation records.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The Dean implements a supervisory program.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Supervisory program documents + Implementation records + Monitoring reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The Dean participates in the recruitment and promotion of faculty and support staff.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Recruitment participation records + Promotion committee minutes + Decision documents.",
                      },
                      {
                        label: "I.4.1",
                        description:
                          "The Dean, the faculty and the administration work together for the improvement of the College/Academic Unit, particularly in setting standards and targets.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Standard setting documents + Target establishment records + Collaborative meeting minutes.",
                      },
                      {
                        label: "I.4.2",
                        description:
                          "The Dean, the faculty and the administration work together for the improvement of the College/Academic Unit, particularly in planning of programs and other related activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Program planning documents + Activity schedules + Collaborative planning records.",
                      },
                      {
                        label: "I.4.3",
                        description:
                          "The Dean, the faculty and the administration work together for the improvement of the College/Academic Unit, particularly in implementing, monitoring and evaluation of plans, programs and other related activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Implementation records + Monitoring reports + Evaluation documents.",
                      },
                      {
                        label: "I.4.4",
                        description:
                          "The Dean, the faculty and the administration work together for the improvement of the College/Academic Unit, particularly in establishing linkages, partnerships and networking activities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Linkage agreements + Partnership documents + Networking activity records.",
                      },
                      {
                        label: "I.4.5",
                        description:
                          "The Dean, the faculty and the administration work together for the improvement of the College/Academic Unit, particularly in providing professional growth and development opportunities for faculty and staff.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Professional development programs + Training records + Growth opportunity documentation.",
                      },
                      {
                        label: "I.4.6",
                        description:
                          "The Dean, the faculty and the administration work together for the improvement of the College/Academic Unit, particularly in preparing policies and guidelines on the internal administration and operation of the College/Academic Unit.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Policy documents + Guideline manuals + Administrative procedure records.",
                      },
                      {
                        label: "I.4.7",
                        description:
                          "The Dean, the faculty and the administration work together for the improvement of the College/Academic Unit, particularly in preparing guidelines on the proper use and maintenance of facilities, equipment, supplies and materials, etc.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Facility use guidelines + Maintenance protocols + Equipment handling procedures.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "Definite criteria and procedures in the selection and promotion of the most qualified faculty and staff are enforced.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Selection criteria documents + Promotion procedures + Enforcement records.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "The Dean, faculty, staff, and students pursue collaborative activities in generating resources and income, and in implementing cost-effective measures.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Resource generation records + Income projects + Cost-effectiveness implementation.",
                      },
                      {
                        label: "I.7.",
                        description:
                          "The Dean implements policies and procedures on internal administration and operations of the College/Academic Unit.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Policy implementation records + Operational procedure enforcement + Administrative compliance.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The College/Academic Unit is efficiently and effectively managed.",
                        category: Category.OUTCOME,
                        evidence:
                          "Management efficiency reports + Effectiveness assessment + Performance evaluation.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter C",
                  description: "Student Administration",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on admission and retention.",
                        category: Category.SYSTEM,
                        evidence:
                          "Student Handbook + Admission policies + Retention guidelines.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on registration requirements.",
                        category: Category.SYSTEM,
                        evidence:
                          "Registration policy documents + Requirement guidelines.",
                      },
                      {
                        label: "S.1.3",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on school fees.",
                        category: Category.SYSTEM,
                        evidence:
                          "Fee structure documents + Payment policies + Financial guidelines.",
                      },
                      {
                        label: "S.1.4",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on academic load.",
                        category: Category.SYSTEM,
                        evidence:
                          "Academic load policies + Course load guidelines.",
                      },
                      {
                        label: "S.1.5",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on transfers.",
                        category: Category.SYSTEM,
                        evidence:
                          "Transfer policies + Credit transfer guidelines.",
                      },
                      {
                        label: "S.1.6",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on residence, course work, scholastic and graduation requirements.",
                        category: Category.SYSTEM,
                        evidence:
                          "Residence requirements + Course work policies + Graduation criteria.",
                      },
                      {
                        label: "S.1.7",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on examination and grading system.",
                        category: Category.SYSTEM,
                        evidence:
                          "Examination policies + Grading system documentation.",
                      },
                      {
                        label: "S.1.8",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on scholarships/grants/assistantships.",
                        category: Category.SYSTEM,
                        evidence:
                          "Scholarship policies + Grant guidelines + Assistantship procedures.",
                      },
                      {
                        label: "S.1.9",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on shifting and adding/dropping of course/s/subject/s.",
                        category: Category.SYSTEM,
                        evidence:
                          "Course shifting policies + Add/drop procedures.",
                      },
                      {
                        label: "S.1.10",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on code of conduct and discipline.",
                        category: Category.SYSTEM,
                        evidence:
                          "Code of conduct + Discipline policies + Behavioral guidelines.",
                      },
                      {
                        label: "S.1.11",
                        description:
                          "The institution has an approved printed Student Handbook/Manual containing policies and guidelines on attendance.",
                        category: Category.SYSTEM,
                        evidence:
                          "Attendance policies + Class participation guidelines.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "Students are provided opportunities to participate in the planning and implementation of activities concerning their welfare.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student participation records + Planning committee minutes + Implementation reports.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "Concerned officials, faculty and staff act promptly on requests, needs, and problems of the students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Request handling records + Response time documentation + Problem resolution reports.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The administration, faculty, staff and students work harmoniously and maintain good working relationship.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Relationship assessment + Collaboration records + Conflict resolution documentation.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The institution has an effective and functional Student Administration.",
                        category: Category.OUTCOME,
                        evidence:
                          "Administration effectiveness reports + Functional assessment + Performance metrics.",
                      },
                      {
                        label: "O.2.",
                        description: "Policy implementation is efficient.",
                        category: Category.OUTCOME,
                        evidence:
                          "Policy implementation evaluation + Efficiency assessment + Compliance reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter D",
                  description: "Financial Management",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has an approved Financial Development Plan (FDP).",
                        category: Category.SYSTEM,
                        evidence:
                          "Approved FDP document + Financial planning records.",
                      },
                      {
                        label: "S.2.1",
                        description:
                          "The Institution has specific budgetary allotment for personnel services.",
                        category: Category.SYSTEM,
                        evidence:
                          "Personnel services budget + Allocation documents.",
                      },
                      {
                        label: "S.2.2",
                        description:
                          "The Institution has specific budgetary allotment for Maintenance and Other Operating Expenses (MOOE).",
                        category: Category.SYSTEM,
                        evidence: "MOOE budget + Operating expense allocation.",
                      },
                      {
                        label: "S.2.3",
                        description:
                          "The Institution has specific budgetary allotment for capital outlay.",
                        category: Category.SYSTEM,
                        evidence:
                          "Capital outlay budget + Investment allocation documents.",
                      },
                      {
                        label: "S.2.4",
                        description:
                          "The Institution has specific budgetary allotment for special projects.",
                        category: Category.SYSTEM,
                        evidence:
                          "Special projects budget + Project funding allocation.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The approved budget is in consonance with the FDP.",
                        category: Category.SYSTEM,
                        evidence:
                          "Budget-FDP alignment documentation + Consistency verification.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution maintains a Financial Management Office managed by qualified and competent staff.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Financial office organization + Staff qualifications + Management competence records.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The financial management personnel are responsible for the efficient management of the financial resources/funds of the institution.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Financial responsibility assignments + Management efficiency records + Fund handling protocols.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The administrative, faculty staff and student representatives participate in the budget preparation and in the procurement program of the institution.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Participation records + Budget preparation minutes + Procurement involvement documentation.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The budget of the Institution is fairly and objectively allocated.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Budget allocation records + Fairness assessment + Objective allocation criteria.",
                      },
                      {
                        label: "I.5.1",
                        description:
                          "The institution allocates funds for cultural development.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Cultural development budget + Funding allocation records.",
                      },
                      {
                        label: "I.5.2",
                        description:
                          "The institution allocates funds for athletic and sports development.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Sports development budget + Athletic funding allocation.",
                      },
                      {
                        label: "I.5.3",
                        description:
                          "The institution allocates funds for medical/dental services.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Medical services budget + Dental funding allocation.",
                      },
                      {
                        label: "I.5.4",
                        description:
                          "The institution allocates funds for library.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Library budget + Resource allocation documents.",
                      },
                      {
                        label: "I.5.5",
                        description:
                          "The institution allocates funds for student body organization.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student organization budget + Funding allocation records.",
                      },
                      {
                        label: "I.5.6",
                        description:
                          "The institution allocates funds for guidance and counseling.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Guidance services budget + Counseling funding allocation.",
                      },
                      {
                        label: "I.5.7",
                        description:
                          "The institution allocates funds for improvement of laboratories/shops.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Laboratory improvement budget + Shop development funding.",
                      },
                      {
                        label: "I.5.8",
                        description:
                          "The institution allocates funds for repair and maintenance of facilities and equipment.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Maintenance budget + Repair funding allocation.",
                      },
                      {
                        label: "I.5.9",
                        description:
                          "The institution allocates funds for purchase of new equipment, supplies and materials.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Equipment purchase budget + Supply acquisition funding.",
                      },
                      {
                        label: "I.5.10",
                        description:
                          "The institution allocates funds for replacement of old and unserviceable equipment.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Equipment replacement budget + Obsolescence funding.",
                      },
                      {
                        label: "I.5.11",
                        description:
                          "The institution allocates funds for construction of new facilities, as needed.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Construction budget + Facility development funding.",
                      },
                      {
                        label: "I.5.12",
                        description:
                          "The institution allocates funds for improvement/expansion of physical plant.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Physical plant budget + Expansion funding allocation.",
                      },
                      {
                        label: "I.5.13",
                        description:
                          "The institution allocates funds for extension and community service.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Extension services budget + Community program funding.",
                      },
                      {
                        label: "I.5.14",
                        description:
                          "The institution allocates funds for disaster and risk reduction.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Disaster management budget + Risk reduction funding.",
                      },
                      {
                        label: "I.5.15",
                        description:
                          "The institution allocates funds for auxiliary services, etc.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Auxiliary services budget + Support funding allocation.",
                      },
                      {
                        label: "I.6.",
                        description:
                          "The budget allotted for specific expenditures indicated in item I.5. is in consonance with existing policies and guidelines.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Budget-policy alignment + Guideline compliance verification + Expenditure approval records.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The Institution has a sound and effective financial management system.",
                        category: Category.OUTCOME,
                        evidence:
                          "Financial system assessment + Effectiveness evaluation + Management performance reports.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter E",
                  description: "Supply Management",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has an approved procurement supply management system in consonance with the Revised IRR of RA 9184 (Government Procurement Reform Act).",
                        category: Category.SYSTEM,
                        evidence:
                          "Procurement system documentation + RA 9184 compliance + Approved supply management.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The institution has a system for the proper disposal on non-serviceable and condemned equipment, supplies and materials.",
                        category: Category.SYSTEM,
                        evidence:
                          "Disposal system documentation + Condemnation procedures + Equipment retirement protocols.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "The office has a storeroom for keeping and storing all equipment, supplies and materials purchased.",
                        category: Category.SYSTEM,
                        evidence:
                          "Storeroom inventory + Storage facility documentation + Equipment storage system.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution maintains a Supply Management Office (SMO) managed by qualified staff with specific functions and responsibilities.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "SMO organization + Staff qualifications + Function assignment records.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The Bids and Awards Committee (BAC) is responsible for the procurement and deliveries of needed equipment, supplies and materials in accordance with the approved Annual Procurement Plan (APP) and Project Procurement Management Plan (PPMP).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "BAC responsibility records + Procurement compliance + APP/PPMP implementation.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The BAC perform its tasks and responsibilities in accordance with recent procurement policies and official issuances.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "BAC performance records + Policy compliance + Official issuance adherence.",
                      },
                      {
                        label: "I.4.",
                        description:
                          "The SMO prepares, evaluates and submits the annual inventory of serviceable and non-serviceable facilities and equipment.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Inventory preparation records + Evaluation documents + Submission verification.",
                      },
                      {
                        label: "I.5.",
                        description:
                          "All approved requests for procurement are published in the Philippine Government Electronic Procurement System (PhilGEPS).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "PhilGEPS publication records + Procurement posting verification + System usage logs.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The institution has an efficient and effective Supply Management System.",
                        category: Category.OUTCOME,
                        evidence:
                          "Supply system assessment + Efficiency evaluation + Effectiveness reports.",
                      },
                      {
                        label: "O.2.",
                        description:
                          "All procurement transactions are transparent.",
                        category: Category.OUTCOME,
                        evidence:
                          "Transaction transparency records + Audit reports + Public disclosure documentation.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter F",
                  description: "Records Management",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has a system of records keeping.",
                        category: Category.SYSTEM,
                        evidence:
                          "Records management system + Documentation procedures + Record keeping protocols.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "The institution has policies and procedures to ensure the security and confidentiality of records.",
                        category: Category.SYSTEM,
                        evidence:
                          "Security policies + Confidentiality procedures + Data protection protocols.",
                      },
                      {
                        label: "S.3.",
                        description:
                          "Policies and procedures on prompt release of records are in place.",
                        category: Category.SYSTEM,
                        evidence:
                          "Record release policies + Processing procedures + Timeliness protocols.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution maintains a Records Management Office (RMO) managed by a qualified Records Officer.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "RMO organization + Records Officer qualifications + Management documentation.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "A records system is installed in offices where it allows easy access to information needed by concerned parties.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Records system implementation + Access facilitation + User support documentation.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The Human Resource Management Office (HRMO) maintains accurate, up-to-date and systematic records of faculty and staff.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "HR records accuracy + Update procedures + Systematic organization.",
                      },
                      {
                        label: "I.4.1",
                        description:
                          "The following updated record compilations are made available to concerned parties: minutes of the Board of Regents/Trustees meetings.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "BOR/BOT minutes availability + Distribution records + Access logs.",
                      },
                      {
                        label: "I.4.2",
                        description:
                          "The following updated record compilations are made available to concerned parties: minutes of the faculty meetings, e.g. minutes of the Academic Council meetings.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Faculty meeting minutes + Academic Council records + Availability documentation.",
                      },
                      {
                        label: "I.4.3",
                        description:
                          "The following updated record compilations are made available to concerned parties: faculty/non teaching personnel individual files.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Personnel files maintenance + Individual record organization + Access management.",
                      },
                      {
                        label: "I.4.4",
                        description:
                          "The following updated record compilations are made available to concerned parties: faculty/non teaching personnel performance evaluation.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Performance evaluation records + Assessment documentation + Availability verification.",
                      },
                      {
                        label: "I.4.5.1",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as student directory.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student directory maintenance + Access procedures + Update records.",
                      },
                      {
                        label: "I.4.5.2",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as alumni directory.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Alumni directory management + Contact update system + Availability documentation.",
                      },
                      {
                        label: "I.4.5.3",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as permanent records of students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student permanent records + Archival system + Access management.",
                      },
                      {
                        label: "I.4.5.4",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as reports of Director/Dean.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Administrative reports + Director/Dean documentation + Report availability.",
                      },
                      {
                        label: "I.4.5.5",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as annual reports.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Annual reports compilation + Distribution records + Access verification.",
                      },
                      {
                        label: "I.4.5.6",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as accomplishment/progress reports.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Accomplishment reports + Progress documentation + Availability management.",
                      },
                      {
                        label: "I.4.5.7",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as scholarship records.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Scholarship documentation + Award records + Access procedures.",
                      },
                      {
                        label: "I.4.5.8",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as statistical data.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Statistical data compilation + Analysis records + Data availability.",
                      },
                      {
                        label: "I.4.5.9",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as financial records of students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Student financial records + Payment documentation + Access management.",
                      },
                      {
                        label: "I.4.5.10",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as inventory of property.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Property inventory records + Asset documentation + Update procedures.",
                      },
                      {
                        label: "I.4.5.11",
                        description:
                          "The following updated record compilations are made available to concerned parties: other records such as proceedings of administrative investigation (if any).",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Investigation proceedings + Administrative records + Documentation management.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The Institution has a commendable Records Management System.",
                        category: Category.OUTCOME,
                        evidence:
                          "Records system evaluation + Management assessment + Performance commendation.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter G",
                  description: "Institutional Planning and Development",
                  indicator: {
                    create: [
                      {
                        label: "S.1.",
                        description:
                          "The institution has an approved strategic Development Plan available in printed and/or electronic forms.",
                        category: Category.SYSTEM,
                        evidence:
                          "Strategic Development Plan + Approval documents + Format availability.",
                      },
                      {
                        label: "S.2.",
                        description:
                          "There is a system of monitoring the implementation of the SDP.",
                        category: Category.SYSTEM,
                        evidence:
                          "Monitoring system documentation + Implementation tracking + Progress assessment.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution's Planning and Development Unit plans, monitors, and evaluates planned activities/targets.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Planning unit activities + Monitoring records + Evaluation reports.",
                      },
                      {
                        label: "I.2.",
                        description:
                          "The planning process is a cooperative and participative endeavor of the administration, the faculty staff and the students.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Cooperative planning records + Participation documentation + Collaborative process.",
                      },
                      {
                        label: "I.3.",
                        description:
                          "The SDP is implemented, monitored, evaluated, reviewed and updated regularly.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "SDP implementation records + Monitoring documentation + Review and update procedures.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The SDP is congruent with the VMGO, as well as with the local, regional and national development goals and agenda.",
                        category: Category.OUTCOME,
                        evidence:
                          "VMGO congruence assessment + Development goal alignment + Agenda compatibility verification.",
                      },
                    ],
                  },
                },
                {
                  label: "Parameter H",
                  description: "Performance of Administrative Personnel",
                  indicator: {
                    create: [
                      {
                        label: "S.1.1",
                        description:
                          "The institution has an approved performance evaluation system for administrative personnel which includes competence.",
                        category: Category.SYSTEM,
                        evidence:
                          "Performance evaluation system + Competence criteria + Approval documentation.",
                      },
                      {
                        label: "S.1.2",
                        description:
                          "The institution has an approved performance evaluation system for administrative personnel which includes quality of work.",
                        category: Category.SYSTEM,
                        evidence:
                          "Work quality standards + Evaluation criteria + Performance metrics.",
                      },
                      {
                        label: "S.1.3",
                        description:
                          "The institution has an approved performance evaluation system for administrative personnel which includes work ethics (punctuality, wise use of time, etc.).",
                        category: Category.SYSTEM,
                        evidence:
                          "Work ethics criteria + Punctuality standards + Time management evaluation.",
                      },
                      {
                        label: "S.1.4",
                        description:
                          "The institution has an approved performance evaluation system for administrative personnel which includes creative ability and innovativeness.",
                        category: Category.SYSTEM,
                        evidence:
                          "Creativity assessment + Innovation criteria + Ability evaluation.",
                      },
                      {
                        label: "S.1.5",
                        description:
                          "The institution has an approved performance evaluation system for administrative personnel which includes ability to handle internal and external pressures.",
                        category: Category.SYSTEM,
                        evidence:
                          "Pressure handling criteria + Stress management evaluation + External factor assessment.",
                      },
                      {
                        label: "S.1.6",
                        description:
                          "The institution has an approved performance evaluation system for administrative personnel which includes interpersonal relations.",
                        category: Category.SYSTEM,
                        evidence:
                          "Interpersonal relations criteria + Relationship assessment + Communication evaluation.",
                      },
                      {
                        label: "I.1.",
                        description:
                          "The institution regularly monitors and evaluates the performance of the administrative personnel.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Performance monitoring records + Regular evaluation schedules + Assessment documentation.",
                      },
                      {
                        label: "I.2.1",
                        description:
                          "The results of performance evaluation of the administrative personnel are utilized to improve performance and delivery of service.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Performance improvement plans + Service delivery enhancement + Evaluation utilization.",
                      },
                      {
                        label: "I.2.2",
                        description:
                          "The results of performance evaluation of the administrative personnel are utilized for promotion.",
                        category: Category.IMPLEMENTATION,
                        evidence:
                          "Promotion criteria application + Career advancement decisions + Evaluation-based promotion.",
                      },
                      {
                        label: "O.1.",
                        description:
                          "The administrative personnel/staff have commendable performance.",
                        category: Category.OUTCOME,
                        evidence:
                          "Performance commendation records + Achievement documentation + Excellence recognition.",
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
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
