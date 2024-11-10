import { Badge, Blur, DateText, MegaphoneIcon, OptionButton, SectionBox, SectionHeader, ShareButtonList, Title } from './MainPage/NewsArea.styles';
import Icon from './common/Icon';
import { CloseButton } from './common/Card/Menu';
import { useState } from 'react';

interface IProps {
  title: string;
  date: string;
  index: number;
  isOpen: boolean;
  onOpen: (value: number) => void;
  onClose: () => void;
}

const TextNews = ({ title, date, index, isOpen, onOpen, onClose }: IProps) => {
  const [hoveredItem, setHoveredItem] = useState('');

  return (
    <SectionBox>
      {isOpen && (
        <Blur>
          <ShareButtonList>
            {['kakao', 'facebook', 'twitter', 'link'].map(item => (
              <div
                key={item}
                onMouseOver={() => setHoveredItem(item)}
                onMouseOut={() => setHoveredItem('')}
                style={{
                  zIndex: 50,
                  width: '36px',
                  height: '36px',
                  margin: '0 6px',
                }}
              >
                <button style={{ width: 'inherit', height: 'inherit' }}>
                  <Icon
                    iconName={
                      hoveredItem === item
                        ? `share/${item}-hover`
                        : `share/${item}`
                    }
                    style={{ width: 'inherit', height: 'inherit' }}
                  />
                </button>
              </div>
            ))}
          </ShareButtonList>
        </Blur>
      )}
      <SectionHeader>
        <MegaphoneIcon
          src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72.fwebp"
          alt=""
        />
        <Badge>보도자료</Badge>
        <DateText>{date}</DateText>
      </SectionHeader>
      <Title>{title}</Title>
      {isOpen ? (
        <CloseButton onClick={onClose} style={{ zIndex: 50 }}>
          <Icon iconName="close" size={24} />
        </CloseButton>
      ) : (
        <OptionButton
          onClick={() => onOpen(index)}
          style={{ top: '28px', right: '20px' }}
        >
          <Icon iconName="options" size={24} />
        </OptionButton>
      )}
    </SectionBox>
  );
};

export default TextNews;