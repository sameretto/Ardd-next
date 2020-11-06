import style from './dropdown.module.scss';

interface Props {
  tabList: DropDownItem[];
}

interface DropDownItem {
  route: string;
  title: string;
}

export default function DropDown({ tabList }: Props) {
  return (
    <div className={style.dropdown}>
      {tabList.map((item, i) => (
        <div key={item.title + i}>
          <p className="py-2 px-3">{item.title}</p>
          {i === 0 && tabList.length > 1 && <hr></hr>}
        </div>
      ))}
    </div>
  );
}
