import './styles/default.css';
import { useSelector } from 'react-redux';
import CanvasComponent from '../../../shared/components/CanvasImage/CanvasImage';
import { useGetMeQuery } from '../../../entities/user/index.js';
import { SocialIcon } from 'react-social-icons';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { formatDateCv } from '../../../shared/lib/formatDateCv';

const Default = () => {
  const cv = useSelector((state) => state.cv.cv);
  const { data: user } = useGetMeQuery();

  const {
    post,
    salary,
    currency,
    conditions,
    jobs,
    institutions,
    projects,
    hard_skill,
    soft_skills,
    about,
    main_color,
  } = cv;

  return (
    <div className="cv-container" id={'cv'}>
      <div className="header">
        <CanvasComponent
          width={200}
          path={'/tmp/ksenya.jpg'}
          height={200}
          style={{
            borderRadius: '100%',
            boxShadow: main_color ? `5px 10px ${main_color}` : '5px 10px #2e1838d2',
          }}
        />
        <div className="header-text">
          <h1 style={{ color: main_color }}>{user?.full_name}</h1>
          <p className="position">
            {post} x {salary.toLocaleString()} {currency}
          </p>
          <div className="conditions">
            {conditions.map((condition) => (
              <span
                key={condition.id}
                className="condition"
                style={{ backgroundColor: main_color }}
              >
                {' '}
                {condition.name}{' '}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="section contact-info">
            <h2 style={{ color: main_color }}>/ Контакты</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <MailOutlined style={{ marginRight: '10px' }} />
              <p>{user?.email}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PhoneOutlined style={{ marginRight: '10px' }} />
              <p>{user?.phone}</p>
            </div>
            {user?.user_nets.map((el) => (
              <div key={el.id} style={{ display: 'flex', alignItems: 'center', maxHeight: 28 }}>
                <SocialIcon network={el.social_net} style={{ width: '20px', marginRight: '8px' }} />
                <p key={el.social_net}>{el.link}</p>
              </div>
            ))}
          </div>
          <div className="section">
            <h2 style={{ color: main_color }}>/ Hard Skills</h2>
            <ul className="skills">
              {hard_skill.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="section">
            <h2 style={{ color: main_color }}>/ Soft Skills</h2>
            <ul className="skills">
              {soft_skills.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="section">
            <h2 style={{ color: main_color }}>/ Образование</h2>
            {institutions.map((institution) => (
              <div key={institution.id} className="education">
                <p className="date">
                  {formatDateCv(institution.start, 'YYYY')} –{' '}
                  {formatDateCv(institution.finish, 'YYYY')}
                </p>
                <div className="education_description">
                  <b>{institution.name}</b>
                  <p>{institution.speciality}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section">
            <h2 style={{ color: main_color }}>/ Опыт работы</h2>
            {jobs.map((job) => (
              <div key={job.id} className="job">
                <p className="date">
                  {formatDateCv(job.start, 'YYYY-MM')} – {formatDateCv(job.finish, 'YYYY-MM')}
                </p>
                <div className="job_description">
                  <b>{job.name}</b>
                  <p>{job.commitment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section">
            <h2 style={{ color: main_color }}>/ Проекты</h2>
            {projects.map((project) => (
              <div key={project.id} className="project">
                <div>
                  <b>{project.name}</b>
                  <p>{project.description}</p>
                </div>
                <a>{project.link}</a>
              </div>
            ))}
          </div>
          <div className="section">
            <h2 style={{ color: main_color }}>/ Обо мне</h2>
            <div className="about-text">
              {about.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
