export const sortInterestsByTemplate = (interestsTemplate: any, selectedActivities: string[]): any => {
    const interestCategories: string[] = [
        'events',
        'places',
        'restaurants',
        'tours',
        'tracks',
        'excursions',
        'routes',
        'hotels'
    ];
    const activityMap: { [id: string]: string[] } = {};
    const sortedInterests: any = {};

    interestCategories.forEach((category) => {
        activityMap[category] = interestsTemplate[category] || [];
        sortedInterests[category] = [];
    });

    const validSelectedActivities = selectedActivities.filter((activityId) => {
        const activityCategories = interestCategories.filter((category) => activityMap[category].includes(activityId));
        return activityCategories.length > 0;
    });

    validSelectedActivities.forEach((activityId) => {
        const activityCategories = interestCategories.filter((category) => activityMap[category].includes(activityId));
        activityCategories.forEach((category: string) => {
            sortedInterests[category].push(activityId);
        });
    });
    return sortedInterests;
};