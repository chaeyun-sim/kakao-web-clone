import { footerList, footerListKakao, footerListKeys, serviceInfoList } from '../../../constants/footer';
import LinkIcon from '../../icons/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Accordion from '../../common/Accordion/Accordion';
import { CopyRight, FooterContainer, GroupInfo, InnerFooter, LinkInfo, ListItem, MainServiceBox, PlusIcon, RelatedSiteBox, RelationSection, ServiceBox, ServiceList, ServiceSection, SubTitle, WrapInfo } from './index.styles';

const Footer = () => {
	const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
	const [hoveredItem, setHoveredItem] = useState('');

	const isHovered = (item: string) => hoveredItem === item;
	
	return (
    <FooterContainer>
      <InnerFooter>
        <ServiceSection>
          <MainServiceBox>
            <h3>오늘의 카카오</h3>
            <div>
              <ul style={{ paddingLeft: 0 }}>
                {footerListKakao[0].map(item => (
                  <ListItem
                    key={item.title}
                    onMouseOver={() => setHoveredItem(item.title)}
                    onMouseOut={() => setHoveredItem('')}
                  >
                    <ServiceList
                      href="/"
                      isHovered={isHovered(item.title)}
                      isFirstItem
                    >
                      {item.title}{' '}
                      {item.hasNoLink ? null : (
                        <LinkIcon
                          color={isHovered(item.title) ? '000' : '333'}
                        />
                      )}
                    </ServiceList>
                  </ListItem>
                ))}
              </ul>
            </div>
          </MainServiceBox>
          {isSmallScreen ? (
            <div style={{ width: '100%', marginTop: '40px' }}>
							{footerList.map((list, idx) => {
								const data = idx === 1 ? [...list, ...footerList[2]] : list;
								return (
                  idx !== 2 && (
                    <Accordion key={footerListKeys[idx]}>
                      <Accordion.Trigger isFirstItem={idx === 0}>
                        {footerListKeys[idx]}
                      </Accordion.Trigger>
                      <Accordion.Content>
                        {data.map((item, itemIndex) => (
                          <ServiceList
                            key={item.title}
                            href="/"
                            isHovered={isHovered(item.title)}
                            style={{ marginTop: itemIndex === 0 ? 0 : '8px' }}
                            onMouseOver={() => setHoveredItem(item.title)}
                            onMouseOut={() => setHoveredItem('')}
                          >
                            {item.title}{' '}
                            {item.hasNoLink ? null : (
                              <LinkIcon
                                color={isHovered(item.title) ? '333' : '888'}
                              />
                            )}
                          </ServiceList>
                        ))}
                      </Accordion.Content>
                    </Accordion>
                  )
                );
              })}
            </div>
          ) : (
            footerList.map((list, idx) => (
              <ServiceBox key={footerListKeys[idx]}>
                <div>
                  {footerListKeys[idx] && (
                    <SubTitle>{footerListKeys[idx]}</SubTitle>
                  )}
                  <ul style={{ paddingLeft: 0 }}>
                    {list.map(item => (
                      <ListItem
                        key={item.title}
                        onMouseOver={() => setHoveredItem(item.title)}
                        onMouseOut={() => setHoveredItem('')}
                      >
                        <ServiceList href="/" isHovered={isHovered(item.title)}>
                          {item.title}{' '}
                          {item.hasNoLink ? null : (
                            <LinkIcon
                              color={isHovered(item.title) ? '333' : '888'}
                            />
                          )}
                        </ServiceList>
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </ServiceBox>
            ))
          )}
        </ServiceSection>
        <RelationSection>
          <div>
            <GroupInfo>
              {serviceInfoList.map(item => (
                <WrapInfo
                  key={item.value}
                  onMouseOver={() => setHoveredItem(`service-${item.value}`)}
                  onMouseOut={() => setHoveredItem('')}
                >
                  <LinkInfo
                    href="/"
                    isHovered={isHovered(`service-${item.value}`)}
                    isBold={item.bold!}
                  >
                    {item.value}
                    {item.hasIcon && (
                      <img
                        src={
                          isHovered(`service-${item.value}`)
                            ? '/icons/to-top.svg'
                            : '/icons/to-bottom.svg'
                        }
                        alt=""
                        width={9}
                        height={9}
                        style={{
                          marginLeft: '4px',
                        }}
                      />
                    )}
                  </LinkInfo>
                </WrapInfo>
              ))}
            </GroupInfo>
            <RelatedSiteBox>
              <a href="/">
                관련사이트{' '}
                <PlusIcon
                  src="/icons/plus.svg"
                  alt="관련 사이트 보기"
                  width={14}
                  height={14}
                />
              </a>
            </RelatedSiteBox>
          </div>
          <CopyRight>© Kakao Corp. All rights reserved.</CopyRight>
        </RelationSection>
      </InnerFooter>
    </FooterContainer>
  );
};

export default Footer;