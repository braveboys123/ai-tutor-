from deepface import DeepFace

def detect_emotion(image_file):
    img_path = "temp.jpg"
    image_file.save(img_path)
    try:
        result = DeepFace.analyze(img_path, actions=['emotion'], enforce_detection=False)
        return result[0]['dominant_emotion']
    except:
        return "neutral"
