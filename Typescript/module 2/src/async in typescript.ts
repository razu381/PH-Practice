{
  //
  let createPromise = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      let data: number = 12345;
      if (data) {
        resolve(data);
      } else {
        reject("sorry, nothing was found");
      }
    });
  };

  let displayData = async (): Promise<number> => {
    try {
      let data: number = await createPromise();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  displayData();

  //
}
