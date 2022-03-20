import linecure from "../images/linecurve.png";

const linecurve = {
  success: true,
  data: {
    chatDetails: [
      {
        id: 1,
        totalCount: 1,
        totalCountTitle: "Total Schools",
        image: { linecure }
      },
      {
        id: 2,
        totalCount: 15,
        totalCountTitle: "Total Teachers",
        image: { linecure }
      },
      {
        id: 3,
        totalCount: 0,
        totalCountTitle: "Total Students",
        image: { linecure }
      },
      {
        id: 4,
        totalCount: 19,
        totalCountTitle: "Total Users",
        image: { linecure }
      },
      {
        graphTitle: "Best Performing School in Attendance",
        buttonStyle: ""
      }
    ]
  }
};

export default linecurve;
