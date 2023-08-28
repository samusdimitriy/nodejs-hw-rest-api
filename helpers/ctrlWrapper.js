const ctrlWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    console.log("ctrlWrapper");
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
