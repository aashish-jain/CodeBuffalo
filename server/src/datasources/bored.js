const { RESTDataSource } = require("apollo-datasource-rest");

class BoredAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://www.boredapi.com/api/";
  }

  //TODO: getAcitivitiesById

  activityReducer(activity) {
    return {
      id: activity.key,
      activity: activity.activity,
      accessibility: activity.accessibility,
      type: activity.type,
      participants: activity.participants,
      price: activity.price,
      link: activity.link
    };
  }

  async getActivity() {
    const response = await this.get("activity");
    console.log("hit");
    return this.activityReducer(response);
  }


  async getActivityById(activityId) {
    const response = await this.get("activity", {"key" : activityId});
    return this.activityReducer(response);
  }



  getActivityByIds({ activityIds }) {
    return Promise.all(
      activityIds.map(activityId => this.getActivityById({ activityId }))
    );
  }
}

module.exports = BoredAPI;
