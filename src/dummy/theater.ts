export function generateRandomTheater() {
  const theater = [];
  for (let i = 0; i < 20; i++) {
    const row = [];
    for (let j = 0; j < 20; j++) {
      // 0, 1, null 중 랜덤한 값 생성
      row.push(
        Math.floor(Math.random() * 3) ? (Math.random() > 0.5 ? 1 : 0) : null,
      );
    }
    theater.push(row);
  }
  return theater;
}
