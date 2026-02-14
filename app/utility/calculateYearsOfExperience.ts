export const calculateExperience = (startYear: number, startMonth: number) => {
    const startDate = new Date(startYear, startMonth, 1);
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    const yearStr = `${years} year${years !== 1 ? 's' : ''}`;
    const monthStr = months > 0 ? ` and ${months} month${months !== 1 ? 's' : ''}` : '';
    return `${yearStr}${monthStr}`;
};