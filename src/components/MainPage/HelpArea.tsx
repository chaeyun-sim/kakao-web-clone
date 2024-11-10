import { SectionContainer } from './common.styles';
import SectionTitle from '../common/SectionTitle';
import {
  InnerHelp,
  InnerTop,
  RecruitWrapper,
  SocialList,
  SubTitle,
  Title,
  SocialWrapper,
  HelpWrapper,
} from './Help.styles';
import { helpData, serviceBtnList } from '../../constants/help';
import HelpBox from '../HelpBox';
import Icon from '../common/Icon';
import SeeMore from '../SeeMore';

const HelpArea = () => {
	return (
    <SectionContainer>
      <SectionTitle
        text="무엇을 도와드릴까요?"
        iconUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_help.gif"
      />
      <InnerHelp>
        <InnerTop>
          {helpData.slice(0, 3).map(item => (
            <HelpBox key={item.title} {...item} />
          ))}
        </InnerTop>
        <SocialWrapper>
          <Title>카카오의 다양한 소식을 구독하세요!</Title>
          <SubTitle>공식 소셜 미디어 바로가기</SubTitle>
          <SocialList>
            {serviceBtnList.map(item => (
              <img
                key={item.name}
                src={`https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/icon_${item.abb}.png`}
                alt={`official ${item.name}`}
              />
            ))}
          </SocialList>
        </SocialWrapper>
        <RecruitWrapper>
          <Title>{'세상만사에 관심이 많다면,\n당신은 이미 카카오 크루'}</Title>
          <SubTitle style={{ cursor: 'pointer' }}>
            영입소식
            <Icon iconName="go-top-right-button-white" />
          </SubTitle>
        </RecruitWrapper>
      </InnerHelp>
      <HelpWrapper>
        {helpData.slice(3).map(item => (
          <HelpBox key={item.title} {...item} variant="large" />
        ))}
      </HelpWrapper>
      <div style={{ marginTop: '24px'}}>
        <SeeMore text="카카오 소식 모아보기" />
      </div>
    </SectionContainer>
  );
};

export default HelpArea;