import './index.scss';
import { useEffect, useRef, useState } from 'react';
import { GetStartedWidget } from '../../../widgets/InitialConfig/GetStartedWidget';
import { useGSAP } from '@gsap/react';
import gsap, { Quint } from 'gsap';
import { SelectSpecification } from '../../../widgets/InitialConfig/SelectSpecification';
import { useNavigate } from 'react-router-dom';
import { ProfessionsList } from '../../../widgets/InitialConfig/ProfessionsList';

const InitialConfigPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [progressBarValue, setProgressBarValue] = useState(0);
  const navigate = useNavigate();
  const onClickBurger = () => {
    setPopupOpen(!isPopupOpen);
  };

  const sliderRef = useRef(null);
  const mainContent = useRef();
  const progressBar = useRef();
  const { contextSafe } = useGSAP();
  const [selectedSpec, selectElementSpec] = useState({});

  const onClickBack = contextSafe(() => {
    let movingDist = 0;
    if (progressBarValue === 66) {
      movingDist = -mainContent.current?.getBoundingClientRect().width;
    } else if (progressBarValue === 99) {
      movingDist = -mainContent.current?.getBoundingClientRect().width;
    }
    gsap.to(sliderRef.current, {
      x: movingDist,
      ease: Quint.easeIn,
    });
    if (progressBarValue > 0) {
      setProgressBarValue((prev) => prev - 33);
    }
  });

  const onClickStart = contextSafe(() => {
    let movingDist = -mainContent.current?.getBoundingClientRect().width;
    if (progressBarValue === 33) {
      movingDist = -mainContent.current?.getBoundingClientRect().width * 2;
    } else if (progressBarValue === 66) {
      movingDist = -mainContent.current?.getBoundingClientRect().width * 2;
      // movingDist = -mainContent.current?.getBoundingClientRect().width * 3;
    }
    gsap.to(sliderRef.current, {
      x: movingDist,
      ease: Quint.easeIn,
    });
    setProgressBarValue((prev) => prev + 33);
  });

  const onFinishInit = () => {
    onClickStart();
    setTimeout(() => {
      navigate('/constructor');
    }, 1500);
  };

  useEffect(() => {
    gsap.to(progressBar.current, { value: progressBarValue, ease: Quint.easeIn });
  }, [progressBarValue]);

  return (
    <div className="initial_config_wrapper">
      <progress
        className={'initial_config_wrapper__progress'}
        max="99"
        value="0"
        ref={progressBar}
      ></progress>

      <main className="initial_config_wrapper__content" ref={mainContent}>
        <div className="initial_config_wrapper__content__slider">
          <div className="initial_config_wrapper__content__slider__wrap" ref={sliderRef}>
            <div className={'initial_config_wrapper__content__slider__item'}>
              <GetStartedWidget onClickStart={onClickStart} />
            </div>
            <div className={'initial_config_wrapper__content__slider__item'}>
              <SelectSpecification
                onClickStart={onClickStart}
                selectElementSpec={selectElementSpec}
              />
            </div>
            <div className={'initial_config_wrapper__content__slider__item'}>
              <ProfessionsList onFinishInit={onFinishInit} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InitialConfigPage;
