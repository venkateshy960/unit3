class BaseController {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  create(params, callback) {
    this.model.create(params, (err, dbNewObject) => {
      if (err) {
        return callback(err);
      }

      return callback(null, dbNewObject);
    });
  }

  findOneAndUpdate(data1, data2, callback) {
    this.model.findOneAndUpdate(
      data1,
      data2,
      { upsert: true, new: true },
      (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      }
    );
  }

  findOneAndRemove(data, callback) {
    this.model.findOneAndRemove(
      data,
      { upsert: true, new: true },
      (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      }
    );
  }

  find(params, callback) {
    this.model.find(params, (err, dbNewObject) => {
      if (err) {
        return callback(err);
      }
      return callback(null, dbNewObject);
    });
  }

  findRuns(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ runs: -1 })
      .limit(1);
  }

  findInnings(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ innings: -1 })
      .limit(1);
  }

  findBalls(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ ballsFaced: 1 })
      .limit(1);
  }

  findBoundarySixes(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ boundarySixes: -1 });
  }

  findBattingStrikeRate(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ battingStrikeRate: -1 })
      .limit(1);
  }
}
module.exports = BaseController;
