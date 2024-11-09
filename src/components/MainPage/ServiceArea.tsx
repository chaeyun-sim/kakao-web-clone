import { useState } from 'react';
import { services } from '../../constants/service';
import SectionTitle from '../common/SectionTitle';
import { Container, InnerService, SeeMoreBox, SeeMoreButton, ServiceBox, ServiceIcon, ServiceList, ServiceTitle, ServiceWrapper } from './ServiceArea.styles';
import Icon from '../common/Icon';
import { useMediaQuery } from 'react-responsive';

const ServiceArea = () => {
	const isMobileScreen = useMediaQuery({ maxWidth: 767})
	const [hoveredItemTitle, setHoveredItemTitle] = useState('');

	return (
    <Container>
      <SectionTitle
        text="더 나은 세상을 만드는 카카오 서비스"
        iconUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_service.gif"
      ></SectionTitle>
      <InnerService>
        <ServiceList>
          {services.map(service => (
            <ServiceBox key={service.title}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceWrapper>
                {service.list.map(item => (
                  <ServiceIcon
                    key={item}
                    style={{ backgroundImage: `url(${item})` }}
                  />
                ))}
                <ServiceIcon
                  onMouseOver={() => setHoveredItemTitle(service.title)}
                  onMouseLeave={() => setHoveredItemTitle('')}
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath opacity='${hoveredItemTitle === service.title ? 1 : 0.4}' d='M1 25C1 13.686 1 8.03 4.515 4.515 8.029 1 13.686 1 25 1h6c11.314 0 16.97 0 20.485 3.515C55 8.029 55 13.686 55 25v6c0 11.314 0 16.97-3.515 20.485C47.971 55 42.314 55 31 55h-6c-11.314 0-16.97 0-20.485-3.515C1 47.971 1 42.314 1 31v-6z' fill='%23000'/%3E%3Cpath d='M26.174 20.389a1.522 1.522 0 013.043 0v15.217a1.522 1.522 0 11-3.043 0V20.39z' fill='%23fff'/%3E%3Cpath d='M35.609 26.172a1.522 1.522 0 110 3.043H20.39a1.522 1.522 0 010-3.043h15.22z' fill='%23fff'/%3E%3C/svg%3E")`,
                  }}
                />
              </ServiceWrapper>
            </ServiceBox>
          ))}
        </ServiceList>
        <SeeMoreBox>
          <SeeMoreButton>
            서비스 전체보기
            <Icon
              iconName="go-button"
              size={24}
              style={{
                marginLeft: isMobileScreen ? '8px' : '12px',
              }}
            />
          </SeeMoreButton>
        </SeeMoreBox>
      </InnerService>
    </Container>
  );
};

export default ServiceArea;