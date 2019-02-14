def dayOfProgrammer(year)
    day = 12
    isLeapYear = year < 1917 ? isLeapYearJulian(year) : isLeapYearGregorian(year)

    if year == 1918
        return "#{day + 14}#{date}"
    end

    return isLeapYear ? "#{day}.09.#{year}" : "#{day + 1}.09.#{year}"
end

def isLeapYearGregorian(year)
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
end

def isLeapYearJulian(year)
    return year % 4 == 0
end