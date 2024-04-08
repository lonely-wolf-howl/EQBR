class EtherService {
  sayHello = async () => {
    return {
      code: 200,
      data: { result: 'Hello, World!' },
    };
  };
}

export default EtherService;
