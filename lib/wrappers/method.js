export default function (...args) {
  return function wrapper() {
    args.forEach((method) => {
      if (method !== undefined) method.apply(this);
    });
  };
}
