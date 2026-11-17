from fastapi.testclient import TestClient

from tgame.app import app

client = TestClient(app)

def test_registeration_successful():
    response = client.post(
        "/authantication/login",
        json={
            "phone_number": "09117462751",
        }
    )
    assert response.status_code == 404