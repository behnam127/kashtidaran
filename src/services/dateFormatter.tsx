function dateFormater(text) {
  const day = text.slice(8, 10)

  const month =
    text.slice(5, 7) == '01'
      ? 'فروردین ماه'
      : text.slice(5, 7) == '02'
      ? 'اردیبهشت ماه'
      : text.slice(5, 7) == '03'
      ? 'خرداد ماه'
      : text.slice(5, 7) == '04'
      ? 'تیر ماه'
      : text.slice(5, 7) == '05'
      ? 'مرداد ماه'
      : text.slice(5, 7) == '06'
      ? 'شهریور ماه'
      : text.slice(5, 7) == '07'
      ? 'مهر ماه'
      : text.slice(5, 7) == '08'
      ? 'آبان ماه'
      : text.slice(5, 7) == '09'
      ? 'آذر ماه'
      : text.slice(5, 7) == '10'
      ? 'دی ماه'
      : text.slice(5, 7) == '11'
      ? 'بهمن ماه'
      : 'اسفند ماه'

  const year = text.slice(0, 4)

  return day + '-' + month + '-' + year
}

export { dateFormater }
