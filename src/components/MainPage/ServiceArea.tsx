import { useState } from 'react';
import { services } from '../../constants/service';
import SectionTitle from '../common/SectionTitle';
import { InnerService, ServiceBox, ServiceIcon, ServiceList, ServiceTitle, ServiceWrapper } from './ServiceArea.styles';
import { useMediaQuery } from 'react-responsive';
import { SectionContainer } from './common.styles';
import SeeMore from '../SeeMore';

const ServiceArea = () => {
	const isSmallScreen = useMediaQuery({ maxWidth: 1023})
	const [hoveredItemTitle, setHoveredItemTitle] = useState('');

	return (
    <SectionContainer>
      <SectionTitle
        text="더 나은 세상을 만드는 카카오 서비스"
        iconUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_service.gif"
      ></SectionTitle>
      <InnerService>
        <ServiceList>
					{services.map(service => {
						const list = isSmallScreen
              ? service.list.slice(0, 2)
              : service.list;

						return (
              <ServiceBox key={service.title}>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceWrapper>
                  {list.map(item => (
                    <ServiceIcon
                      key={item}
                      style={{ backgroundImage: `url(${item})` }}
                    />
                  ))}
                  <ServiceIcon
                    onMouseOver={() => setHoveredItemTitle(service.title)}
                    onMouseLeave={() => setHoveredItemTitle('')}
                    isHovered={hoveredItemTitle === service.title}
                    style={{
                      backgroundSize: '56px 56px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </ServiceWrapper>
              </ServiceBox>
            );
					})}
        </ServiceList>
				<SeeMore text="서비스 전체보기" />
      </InnerService>
    </SectionContainer>
  );
};

export default ServiceArea;