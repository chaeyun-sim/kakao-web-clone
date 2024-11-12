import { responsibleData } from '../../constants/responsible';
import Icon from '../common/Icon';
import SectionTitle from '../common/SectionTitle';
import { SectionContainer } from './common.styles';
import { Category, ClickButton, Image, InnerResponsible, ResponsibleBox, Text, TopBox } from './ResponsibleArea.styles';

const ResponsibleArea = () => {
	return (
    <SectionContainer>
      <SectionTitle
        text="약속과 책임"
        iconUrl="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_esg.gif"
      />
      <InnerResponsible>
        {responsibleData.map((item, index) => (
          <ResponsibleBox
            key={item.text}
            style={{ backgroundColor: item.backgroundColor }}
          >
            <TopBox>
              <Category style={{ backgroundColor: item.topColor }}>
                {item.category}
              </Category>
            </TopBox>
            <Image isFirst={index === 0} src={item.imageUrl} />
            <Text style={{ color: item.textColor }}>{item.text}</Text>
            <ClickButton aria-label='이동하기'>
              <Icon iconName="go-button-sm" />
            </ClickButton>
          </ResponsibleBox>
        ))}
      </InnerResponsible>
    </SectionContainer>
  );
};

export default ResponsibleArea;