import { ArrowRightOutlined } from '@ant-design/icons';
import Button from '../../../../shared/uiXeny/components/Button/Button';

export const GetStartedWidget = ({ onClickStart }) => {
  return (
    <div className={'first_page'}>
      <p>Приветственная страница</p>
      {/*<Link to={'specifications'}>*/}
      <Button buttonType={'primary'} onClick={onClickStart} sizeType={'large'}>
        <span>Начать</span>
        <ArrowRightOutlined />
      </Button>
      {/*</Link>*/}
    </div>
  );
};
