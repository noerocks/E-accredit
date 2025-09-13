export const instrument = {
  id: "uuid-123",
  name: "BS Computer Science Accreditation Instrument",
  accreditingBody: "AACCUP",
  area: [
    {
      id: 1,
      label: "Area 1",
      description: "Mission and Vision",
      instrumentId: "uuid-123",
      parameter: [
        {
          id: 1,
          label: "Parameter 1",
          description: "Clarity of Vision",
          areaId: 1,
          indicator: [
            {
              id: 1,
              label: "S.1",
              description: "The institution has a clearly articulated vision.",
              category: "SYSTEM",
              evidence: "Vision statement document",
              parameterId: 1,
            },
            {
              id: 2,
              label: "I.1",
              description: "The mission is consistent with the vision.",
              category: "IMPLEMENTATION",
              evidence: "Mission statement document",
              parameterId: 1,
            },
          ],
        },
        {
          id: 2,
          label: "Parameter 2",
          description: "Alignment with National Goals",
          areaId: 1,
          indicator: [
            {
              id: 3,
              label: "O.1",
              description: "Mission aligns with CHED goals.",
              category: "OUTCOME",
              evidence: "CHED Memorandum",
              parameterId: 2,
            },
            {
              id: 4,
              label: "S.1",
              description: "Vision aligns with Sustainable Development Goals.",
              category: "SYSTEM",
              evidence: "SDG alignment report",
              parameterId: 2,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Area 2",
      description: "Faculty",
      instrumentId: "uuid-123",
      parameter: [
        {
          id: 3,
          label: "Parameter 1",
          description: "Faculty Qualifications",
          areaId: 2,
          indicator: [
            {
              id: 5,
              label: "S.1",
              description: "Faculty possess relevant academic degrees.",
              category: "SYSTEM",
              evidence: "Faculty credentials",
              parameterId: 3,
            },
            {
              id: 6,
              label: "I.1",
              description:
                "Faculty have professional licenses where applicable.",
              category: "IMPLEMENTATION",
              evidence: "PRC licenses",
              parameterId: 3,
            },
          ],
        },
        {
          id: 4,
          label: "Parameter 2",
          description: "Faculty Development",
          areaId: 2,
          indicator: [
            {
              id: 7,
              label: "I.1",
              description: "Faculty attend relevant training programs.",
              category: "IMPLEMENTATION",
              evidence: "Training certificates",
              parameterId: 4,
            },
            {
              id: 8,
              label: "O.1",
              description: "Faculty engage in research and publication.",
              category: "OUTCOME",
              evidence: "Research outputs",
              parameterId: 4,
            },
          ],
        },
      ],
    },
  ],
};
