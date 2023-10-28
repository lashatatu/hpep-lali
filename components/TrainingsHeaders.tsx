// @ts-ignore
const TrainingsHeaders = ({h2Header,h3Date,faculty}) => {
  return (
    <div>
      <h3 className={"lt-page-h3 text-xl"}>
        თრენინგი “{h2Header}” განხორციელდა:
      </h3>
      <h3 className={"lt-page-h3 text-xl"}>
        {h3Date}
        <br/>
        {faculty}ს შემდეგი აკადემიური პერსონალისთვის:
      </h3>
    </div>
  )
}

export default TrainingsHeaders
