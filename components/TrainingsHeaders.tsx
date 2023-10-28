// @ts-ignore
const TrainingsHeaders = ({h2Header, h3Date, faculty}) => {
  return (
    <div>
      <h3 className={'lt-page-h3 text-xl'}>
        <p className={'pb-2'}>თრენინგი “{h2Header}” განხორციელდა:</p>
        <p className={'pb-2'}>{h3Date}</p>
        <p>{faculty}ს შემდეგი აკადემიური პერსონალისთვის:</p>
      </h3>
    </div>
  )
}

export default TrainingsHeaders
