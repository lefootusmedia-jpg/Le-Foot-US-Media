export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Nouveau Power Ranking :", body);

    return Response.json({
      success: true,
      message: "Power Ranking reçu !",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Erreur",
      },
      { status: 500 }
    );
  }
}