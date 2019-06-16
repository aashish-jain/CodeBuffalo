module.exports = {
  Query: {
    activity: (_, activity, { dataSources }) => {
//      if (activity.id == 0) return dataSources.BoredAPI.getActivity();
 //     else return dataSources.BoredAPI.getActivityById(activity.id);
        return dataSources.BoredAPI.getActivity();
    }
  }
};
