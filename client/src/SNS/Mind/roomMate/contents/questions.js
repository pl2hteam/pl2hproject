const questions = [
    {
        'question': '기숙사 통금 시간이 30분 남았는데<br/>친구가 더 놀자고 한다.',
        'answers': [
            {
                text: '외박은 ❌ 기숙사로 GO ‼️',
                score: 3
            },
            {
                text: '이 때가 기회! 밤새서 논다 🔥',
                score: 7
            }
        ],
        'weight': 0.7
    },
    {
        'question': '당신의 페이보릿 공부 장소는?',
        'answers': [
            {
                text: '내 방이 제일 좋아🤓',
                score: 1
            },
            {
                text: '가까운 게 최고👍 기숙사 스터디룸',
                score: 2
            },
            {
                text: '포기할 수 없는 카공🥤',
                score: 4
            },
            {
                text: ' ㅌㄷㄷ열람실 셀프 감금🔒',
                score: 3
            }
        ],
        'weight': 0.3
    },
    {
        'question': '기숙사에서 처음 룸메를 마주쳤다!',
        'answers': [
            {
                text: '번호가 어떻게 되세요? <br/>지금부터 칭긔칭긔😆',
                score: 6
            },
            {
                text: '안녕하세욥…🙈 머쓱타드x1👀',
                score: 4
            }
        ],
        'weight': 0.5
    },
    {
        'question': '기숙사 편의점은 영업종료,<br/>배가 고픈 당신🥺,<br/>그리고 놀러나간 룸메의 컵라면🍜',
        'answers': [
            {
                text: '바로 룸메에게 연락해📞 <br/>먹어도 되는지 물어본다.',
                score: 8
            },
            {
                text: '20분 거리의 편의점에 다녀온다.🐾',
                score: 2
            },
            {
                text: '일단 배고프니 먹고 잔다 🥱',
                score: 0
            }
        ],
        'weight': 0.3
    },
    {
        'question': 'TO. 청소당번을 잘 안 지키는 룸메',
        'answers': [
            {
                text: '너 오늘 당번인데 어디야?😡 <br/>당장 분노의 카톡을 보낸다.',
                score: 6

            },
            {
                text: '연락할까 말까 고민하다가<br/> 결국 직접 치운다.😑',
                score: 4
            }
        ],
        'weight': 0.2
    },
    {
        'question': '볼 일 보고 집에 들어온 당신,<br/>눈에 들어온 당신의 방 상태는?',
        'answers': [
            {
                text: '옷무덤=침대, 물건이 잔뜩 놓인 책상!<br/>무질서 속의 질서라구😝',
                score: 3

            },
            {
                text: '잘 정리된 이불, <br/> 바닥엔 먼지 한 톨 없이 깔끔✨',
                score: 7
            }
        ],
        'weight': 0.6
    },
    {
        'question': '욕실에서 머리를 감은 후 나는',
        'answers': [
            {
                text: '아 개운하다🧖‍♀️',
                score: 2
            },
            {
                text: '머리카락을 열심히 모아서 버린다🧼',
                score: 8
            }
        ],
        'weight': 0.2
    },
    {
        'question': '청소기는',
        'answers': [
            {
                text: '하루에 한 번 돌려야지🧹',
                score: 9
            },
            {
                text: '더러우면 돌려야지🤸',
                score: 1
            }
        ],
        'weight': 0.2
    },
    {
        'question': '내일 아침 7시 알람을 설정한다면?',
        'answers': [
            {
                text: '나는 날 믿을 수 없다. <br/> 6:50, 6:55, 6:58, 7:00, 7:02..∞',
                score: 7
            },
            {
                text: '7시 알람 하나면 충-분🕰',
                score: 3
            }
        ],
        'weight': 0.6
    },
    {
        'question': '할 일을 마치고 어느새 밤 10시.<br/> 오늘의 남은 시간 동안 당신은?',
        'answers': [
            {
                text: '벌써 10시네. 슬슬 잘 준비 해야지😴',
                score: 1
            },
            {
                text: '아직 자려면 멀었네. <br/>본격적인 하루를 시작해볼까 🥴',
                score: 9
            }
        ],
        'weight': 0.4
    }
    ,
    {
        'question': '',
        'answers': [
            {
                text: '',
                score: 0
            },
            {
                text: '',
                score: 0
            }
        ],
        'weight': 0
    }
]

export default questions;