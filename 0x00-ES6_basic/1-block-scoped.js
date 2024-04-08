export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // not using var
    const task2 = false; // not using var
  }

  return [task, task2];
}
