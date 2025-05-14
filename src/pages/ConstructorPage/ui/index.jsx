import './index.scss';
import { ConstructorSideBar } from '../../../features/cv';
import { useParams } from 'react-router-dom';
import { useGetCvByIdQuery } from '../../../entities/cv/index.js';
import { useDispatch } from 'react-redux';
import { setCv } from '../../../entities/cv/model/cvSlice.js';
import { useTheme } from '../../../shared/uiXeny/hooks/useTheme';
import CvContentHOC from '../../../widgets/CvContentHOC/ui/CvContentHOC.jsx';

const ConstructorPage = () => {
  const { changeTheme } = useTheme();

  changeTheme('cvConstructorTheme');

  const { cv_id } = useParams();
  const { data: cv } = useGetCvByIdQuery(+cv_id, { skip: !cv_id });
  const dispatch = useDispatch();

  if (cv) {
    dispatch(setCv(cv));
  }

  return (
    <div className={'constructor_page'}>
      <ConstructorSideBar />
      <div className="constructor_page__content_wrapper">
        <CvContentHOC />
      </div>
    </div>
  );
};

export default ConstructorPage;
