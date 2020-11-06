import React from 'react';
import Link from 'next/link';
import { NextRouter } from 'next/router';

import style from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AR_NAVBAR, EN_NAVBAR } from './translations.constants';
import DropDown from '../shared/dropdown/dropdown.component';

interface Props {
  router: NextRouter;
}

export default class Navbar extends React.Component<Props> {
  public readonly state = {
    tab1: false,
    tab2: false,
    tab4: false,
    tab5: false,
    tab6: false,
  };

  constructor(props: Props) {
    super(props);
  }

  toggleComponent(name: string): void {
    switch (name) {
      case 'tab1':
        this.setState({ tab1: !this.state.tab1 });
        break;
      case 'tab2':
        this.setState({ tab2: !this.state.tab2 });
        break;
      case 'tab4':
        this.setState({ tab4: !this.state.tab4 });
        break;
      case 'tab5':
        this.setState({ tab5: !this.state.tab5 });
        break;
      case 'tab6':
        this.setState({ tab6: !this.state.tab6 });
        break;
      default:
        null;
    }
  }

  closeTabsEvent(): void {
    this.setState({ tab1: false, tab2: false, tab4: false, tab5: false, tab6: false });
  }

  render() {
    const { tab1, tab2, tab4, tab5, tab6 } = this.state;
    const tabs = this.props.router.locale === 'en' ? EN_NAVBAR : AR_NAVBAR;
    return (
      <div className={style.navbar + ' py-2 px-5'}>
        <a className={style.logo}>
          <img src="/Images/ardd-logo.png" height="75" width="52" alt="Ardd logo" />
          <div className="my-auto ml-3">
            <p className={style['logo-font']}>Arab Renaissance for</p>
            <p className={style['logo-font']}>Democracy & Development</p>
          </div>
        </a>
        <div className={style.tabs}>
          <div className="mr-4">
            <button onBlur={() => this.closeTabsEvent()} onClick={() => this.toggleComponent('tab1')}>
              {tabs.navParentItem1.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {tab1 && <DropDown tabList={tabs.navParentItem1.dropDownItems}></DropDown>}
          </div>
          <div className="mx-4">
            <button onBlur={() => this.closeTabsEvent()} onClick={() => this.toggleComponent('tab2')}>
              {tabs.navParentItem2.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {tab2 && <DropDown tabList={tabs.navParentItem2.dropDownItems}></DropDown>}
          </div>
          <div className="mx-4">
            <button>{tabs.navParentItem3.title}</button>
          </div>
          <div className="mx-4">
            <button onBlur={() => this.closeTabsEvent()} onClick={() => this.toggleComponent('tab4')}>
              {tabs.navParentItem4.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {tab4 && <DropDown tabList={tabs.navParentItem4.dropDownItems}></DropDown>}
          </div>
          <div className="mx-4">
            <button onBlur={() => this.closeTabsEvent()} onClick={() => this.toggleComponent('tab5')}>
              {tabs.navParentItem5.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {tab5 && <DropDown tabList={tabs.navParentItem5.dropDownItems}></DropDown>}
          </div>
          <div className="ml-4">
            <button onBlur={() => this.closeTabsEvent()} onClick={() => this.toggleComponent('tab6')}>
              {tabs.navParentItem6.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {tab6 && <DropDown tabList={tabs.navParentItem6.dropDownItems}></DropDown>}
          </div>
        </div>
        <div className={style.options + ' my-auto'}>
          <FontAwesomeIcon className="my-auto" icon={faSearch} />
          <Link href="" locale={this.props.router.locale === 'en' ? 'ar' : 'en'}>
            <a className={style['arabic-translation-word'] + ' ml-3'}>
              {this.props.router.locale === 'en' ? 'عربى' : 'English'}
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
