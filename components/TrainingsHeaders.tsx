// @ts-ignore
const TrainingsHeaders = ({h2Header,h3Date,faculty}) => {
  return (
    <div>
      <h2 className={"lt-page-h2"}>
        თრენინგი “{h2Header}” განხორციელდა:
      </h2>
      <h3 className={"lt-page-h3"}>
        {h3Date}
        <br/>
        {faculty}ს შემდეგი აკადემიური პერსონალისთვის:
      </h3>
    </div>
  )
}

export default TrainingsHeaders
