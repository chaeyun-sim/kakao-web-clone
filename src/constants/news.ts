import { Story } from './stories';

interface StoryWithDate extends Story {
  date: string;
}

export const cardNews: StoryWithDate[] = [
  {
    badgeImageUrl:
      'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72.fwebp',
    badgeText: '보도자료',
    title: '카카오-KISA, 중소사업자 대상\n개인정보 보호 온라인 교육 진행',
    imageUrl:
      'https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2F0918f760019300001.jpg',
    tagList: ['카카오비즈니스', '카카오비즈니스세미나'],
    largeSize: 'imageBottom',
    date: '2024.11.08',
  },
  {
    badgeImageUrl:
      'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72.fwebp',
    badgeText: '보도자료',
    title: '카카오, 3분기 연결 매출 1조\n9,214억원·영업익 1,305억원 기록',
    imageUrl:
      'https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2F03ed62fb019300001.png',
    tagList: ['실적발표'],
    largeSize: 'imageBottom',
    date: '2024.11.07'
  },
  {
    badgeImageUrl:
      'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72.fwebp',
    badgeText: '보도자료',
    title:
      "아직 끝나지 않은 쇼핑 축제\n카카오쇼핑라이브, '카카오 애프터\n세일' 프로모션",
    imageUrl:
      'https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2Ffef6e80a019200001.jpg',
    tagList: ['카카오쇼핑라이브', '카쇼라'],
    largeSize: 'imageBottom',
    date: '2024.11.06'
  },
];

export const textNews: Pick<StoryWithDate, 'date' | 'title'>[] = [
  {
    date: '2024.11.06',
    title: "카카오, 티스토리 '오블완 챌린지' 진행",
  },
  {
    date: '2024.11.04',
    title: "카카오, 한글 점자의 날 맞아 전국 시각장애 특수학교에 '2025 카카오 점자달력' 전달"
  }
];