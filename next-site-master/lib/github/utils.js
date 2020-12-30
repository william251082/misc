function getErrorText(res) {
  try {
    return res.text();
  } catch (err) {
    return res.statusText;
  }
}

export async function getError(msg, res) {
  const errorText = await getErrorText(res);
  const error = new Error(`${msg} (${res.status}): ${errorText}`);

  error.url = res.url;
  error.status = res.status;
  error.headers = res.headers.raw();

  return error;
}
