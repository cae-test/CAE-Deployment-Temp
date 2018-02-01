package i5.las2peer.services.uatMusic;

import java.util.*;
import org.json.simple.*;
import org.json.simple.parser.ParseException;

public class classes {

    class image {

    public image() {}
    
    private int imageId;

    public void setimageId(int setValue) {
        this.imageId = setValue;
    }

    public int getimageId() {
        return this.imageId;
    }
    private String imageName;

    public void setimageName(String setValue) {
        this.imageName = setValue;
    }

    public String getimageName() {
        return this.imageName;
    }
    private String imageUrl;

    public void setimageUrl(String setValue) {
        this.imageUrl = setValue;
    }

    public String getimageUrl() {
        return this.imageUrl;
    }

    public JSONObject toJSON() {

        JSONObject jo = new JSONObject();
        jo.put("imageId", this.imageId); 
        jo.put("imageName", this.imageName); 
        jo.put("imageUrl", this.imageUrl); 

        return jo;
    }

    public void fromJSON(String jsonString) throws ParseException {
        JSONObject jsonObject = (JSONObject) JSONValue.parseWithException(jsonString);
        this.imageId = ((Long) jsonObject.get("imageId")).intValue(); 
        this.imageName = (String) jsonObject.get("imageName"); 
        this.imageUrl = (String) jsonObject.get("imageUrl"); 

    }

}
    class music {

    public music() {}
    
    private int imageId;

    public void setimageId(int setValue) {
        this.imageId = setValue;
    }

    public int getimageId() {
        return this.imageId;
    }
    private int musicId;

    public void setmusicId(int setValue) {
        this.musicId = setValue;
    }

    public int getmusicId() {
        return this.musicId;
    }
    private String musicUrl;

    public void setmusicUrl(String setValue) {
        this.musicUrl = setValue;
    }

    public String getmusicUrl() {
        return this.musicUrl;
    }
    private String musicName;

    public void setmusicName(String setValue) {
        this.musicName = setValue;
    }

    public String getmusicName() {
        return this.musicName;
    }

    public JSONObject toJSON() {

        JSONObject jo = new JSONObject();
        jo.put("imageId", this.imageId); 
        jo.put("musicId", this.musicId); 
        jo.put("musicUrl", this.musicUrl); 
        jo.put("musicName", this.musicName); 

        return jo;
    }

    public void fromJSON(String jsonString) throws ParseException {
        JSONObject jsonObject = (JSONObject) JSONValue.parseWithException(jsonString);
        this.imageId = ((Long) jsonObject.get("imageId")).intValue(); 
        this.musicId = ((Long) jsonObject.get("musicId")).intValue(); 
        this.musicUrl = (String) jsonObject.get("musicUrl"); 
        this.musicName = (String) jsonObject.get("musicName"); 

    }

}
    class imageMusic {

    public imageMusic() {}
    
    private String imageName;

    public void setimageName(String setValue) {
        this.imageName = setValue;
    }

    public String getimageName() {
        return this.imageName;
    }
    private String musicUrl;

    public void setmusicUrl(String setValue) {
        this.musicUrl = setValue;
    }

    public String getmusicUrl() {
        return this.musicUrl;
    }
    private String imageUrl;

    public void setimageUrl(String setValue) {
        this.imageUrl = setValue;
    }

    public String getimageUrl() {
        return this.imageUrl;
    }
    private String musicName;

    public void setmusicName(String setValue) {
        this.musicName = setValue;
    }

    public String getmusicName() {
        return this.musicName;
    }

    public JSONObject toJSON() {

        JSONObject jo = new JSONObject();
        jo.put("imageName", this.imageName); 
        jo.put("musicUrl", this.musicUrl); 
        jo.put("imageUrl", this.imageUrl); 
        jo.put("musicName", this.musicName); 

        return jo;
    }

    public void fromJSON(String jsonString) throws ParseException {
        JSONObject jsonObject = (JSONObject) JSONValue.parseWithException(jsonString);
        this.imageName = (String) jsonObject.get("imageName"); 
        this.musicUrl = (String) jsonObject.get("musicUrl"); 
        this.imageUrl = (String) jsonObject.get("imageUrl"); 
        this.musicName = (String) jsonObject.get("musicName"); 

    }

}

    
}
