import { hpepTextbooks } from "../../../../utilities/hpep-textbooks";
import {hpepGeneral} from '../../../../utilities/hpep-general'

const Page = () => {
  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1"}>ცენტრის ბიბლიოთეკა</h1>
      <div className={"mx-10 pb-10"}>
        <h2 className={"lt-page-h2 text-center pl-0"}>HPEP textbooks</h2>
        <div className={'grid grid-cols-5 pb-8 text-center'}>
          <div className={'font-bold col-span-2'}>სათაური</div>
          <div className={'font-bold'}>ავტორი</div>
          <div className={'font-bold'}>ISBN</div>
          <div className={'font-bold'}>წელი</div>
        </div>
        {hpepTextbooks.map((book, index) => (
          <div key={index} className={'grid grid-cols-5 gap-x-2 gap-y-10 border-2 text-center'}>
            <div className={'col-span-2'}>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.isbn}</div>
            <div>{book.year}</div>
          </div>
        ))}
      </div>
      <div className={"mx-10 pb-10"}>
        <h2 className={"lt-page-h2 text-center pl-0"}>HPEP textbooks</h2>
        <div className={'grid grid-cols-6 pb-8 text-center'}>
          <div className={'font-bold col-span-2'}>სათაური</div>
          <div className={'font-bold'}>ავტორი</div>
          <div className={'font-bold'}>ISBN</div>
          <div className={'font-bold'}>გამომცემელი</div>
          <div className={'font-bold'}>წელი</div>
        </div>
        {hpepGeneral.map((book, index) => (
          <div key={index} className={'grid grid-cols-6 gap-x-2 gap-y-10 border-2 text-center'}>
            <div className={'col-span-2'}>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.isbn}</div>
            <div>{book.publisher}</div>
            <div>{book.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page
