import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.instrument.deleteMany({
  //   where: { accreditingBody: "ACCUP" },
  // });

  const instrument = await prisma.instrument.create({
    data: {
      name: "ACCUP Survey Instrument",
      accreditingBody: "ACCUP",
      area: {
        create: [
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
