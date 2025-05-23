export enum Gender {
  BOY = "BOY",
  GIRL = "GIRL"
}

export function heightCalculator(
  currentHeight: number,
  currentAge: number,
  gender: Gender,
  fatherHeight?: number,
  motherHeight?: number,
) {
  // Height increase per year based on the provided table for boys and girls
  const heightIncreasePerYear = {
    GIRL: [0, 12.4, 8.7, 7.6, 6.7, 5.7, 5.7, 5.8, 5.9, 6.1, 6.2, 6.7, 5.6, 3.3, 1.7, 0.6, 0.7, 0.3, 0, 0, 0],
    BOY: [0, 11.4, 9.0, 7.2, 6.7, 6.0, 5.7, 5.6, 5.3, 5.2, 5.3, 6.0, 6.9, 7.2, 5.8, 3.9, 2.3, 0.9, 0, 0, 0]
  };

  if (!currentHeight || !currentAge) return

  // Ensure the age is within the supported range
  if (currentAge < 0 || currentAge > 20) {
    return null; // Invalid year or month
  }

  // Determine the height increase array based on gender
  const heightIncrease = gender === "BOY" ? heightIncreasePerYear.BOY : heightIncreasePerYear.GIRL;
  // Initialize array to store heights for each age
  const heightsByAge = new Array(21).fill('0'); // Default to '0' for all ages initially

  // Tính chiều cao hiện tại theo tỷ lệ số tháng trong năm
  const adjustedCurrentHeight = currentHeight;

  // Đặt chiều cao lúc tuổi hiện tại vào mảng
  heightsByAge[currentAge] = adjustedCurrentHeight.toFixed(1);

  let predictedHeight = adjustedCurrentHeight;

  // Calculate growth for future years starting from the next whole year
  for (let year = currentAge + 1; year <= 20; year++) {
    predictedHeight += heightIncrease[year - 1]; // Add previous year's increase
    heightsByAge[year] = predictedHeight.toFixed(1);
  }

  if (fatherHeight && motherHeight) {
    let finalHeight;
    if (gender === "BOY") {
      finalHeight = (((+fatherHeight + +motherHeight) * 1.08) / 2).toFixed(1);
    } else {
      finalHeight = (((+fatherHeight * 0.923) + +motherHeight) / 2).toFixed(1);
    }


    // Ensure that height from 18 to 20 is correctly adjusted
    for (let year = 18; year <= 20; year++) {
      if (finalHeight >= heightsByAge[18]) {
        heightsByAge[year] = finalHeight;
      }
    }
  }

  return {
    predictedHeightAt20: heightsByAge[20] as number[],
    heightsByAge: heightsByAge
  };
}

export function dataCurrentHeight(listHeight: number[], currentAge: number) {
  const finalHeight = listHeight[currentAge]
  if (!finalHeight) {
    return 0;
  }
  return Number(finalHeight.toFixed(1));
}