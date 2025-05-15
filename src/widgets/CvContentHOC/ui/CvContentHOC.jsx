import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

const CvContentPage = lazy(() => import('../../../widgets/ConstructorContent/index.js'));
const CvDefaultCVPage = lazy(() => import('../../../widgets/ConstructorContent/ui/Default.jsx'));
const CvBluePage = lazy(() => import('../../../widgets/ConstructorContent/ui/Blue.jsx'));

const CvContentHOC = () => {
  const cv = useSelector((state) => state.cv.cv);
  let cvStyleToRender = null;

  switch (cv?.style) {
    case 'industrial': {
      cvStyleToRender = <CvContentPage />;
      break;
    }
    case 'default': {
      cvStyleToRender = <CvDefaultCVPage />;
      break;
    }
    case 'pastel': {
      cvStyleToRender = <CvBluePage />;
      break;
    }
  }
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>{cvStyleToRender}</Suspense>
    </div>
  );
};

export default CvContentHOC;
