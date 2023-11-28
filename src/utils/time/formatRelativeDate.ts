

export function formatRelativeDate(iso8601: string) {
    let now = new Date();
    let inputTime = new Date(iso8601);
    let difference = now.getTime() - inputTime.getTime();
    
    let time, unit;

    // 한시간 이내
    if (difference < 1000 * 3600)
    {
        time = difference / (1000 * 60);
        unit = "분"
    }
    // 24시간 이전
    else if (difference < 1000 * 3600 * 24){
        time = difference / (1000 * 3600);
        unit = "시간"
    }
    // 일주일 이전
    else if (difference < 1000 * 3600 * 24 * 7) {
        time = difference / (1000 * 3600 * 24 );
        unit = "일";
    }
    // 30일 이전
    else if (difference < 1000 * 3600 * 24 * 30) {
        time = difference / (1000 * 3600 * 24 * 7 );
        unit = "주";
    }
    else {
        time = difference / (1000 * 3600 * 24 * 30);
        unit = "달";
    }


    return `${Math.floor(time)}${unit} 전`
}
