const LevelThreeAdditional = () => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <p className="text-sm">
        In addition, to qualify for Level III re-accredited status, an
        undergraduate program must satisfy the first two of the following
        criteria and two others of the succeeding ones:
      </p>
      <div className="text-sm text-muted-foreground flex flex-col gap-2">
        <p>a. a reasonably high standard of instruction;</p>
        <p>
          b. a highly visible community extension program. A description of the
          programs, the nature and extent of student, faculty and staff
          involvement, and other details shall be required documentation for
          this indicator;
        </p>
        <p>
          c. a highly visible research tradition. The following must be
          observable over a reasonable period of time:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
          <li>provision for a reasonable budget</li>
          <li>quality of completed outputs</li>
          <li>measurable results such as publication, etc</li>
          <li>involvement of a significant number of faculty members</li>
          <li>visible, tangible and measurable impact on the community</li>
        </ul>
        <p>
          d. a strong faculty development tradition evidenced in licensure
          examinations over the last three years (will apply only to those
          programs where such examinations are required).
        </p>
        <p>
          e. existence of working consortia or linkages with other schools
          and/or agencies. Documentary evidence shall include a description of
          the nature, mechanism, working agreements and other details of
          consortia.
        </p>
        <p>
          f. extensive and functional library and other learning resource
          facilities.
        </p>
      </div>
    </div>
  );
};

export default LevelThreeAdditional;
