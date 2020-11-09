import style from './dropdown.module.scss';
import Link from 'next/link';
import react, { createRef } from 'react';

type Props = {
  tabList: DropDownItem[];
  itemClicked: (route: string) => void;
  tab: string;
};

interface DropDownItem {
  route: string;
  title: string;
}

export default function DropDown({ tabList, itemClicked, tab }: Props) {
  const node = createRef<HTMLDivElement>();
  const handleClick = (e: any) => {
    if (node.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    itemClicked(tab);
  };
  react.useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <div ref={node} className={style.dropdown}>
      {tabList.map((item, i) => (
        <Link href={item.route}>
          <div onClick={() => itemClicked(tab)} key={item.title + i}>
            <p className="py-2 px-3">{item.title}</p>
            {i === 0 && tabList.length > 1 && <hr></hr>}
          </div>
        </Link>
      ))}
    </div>
  );
}
