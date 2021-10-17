let id = 1;

export function getId() {
  id++;
  return Date.now() + "_" + id;
}
