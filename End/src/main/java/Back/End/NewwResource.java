package Back.End;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity

public class NewwResource 
{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int resId;
	private String resText;
	private int resNum;
	private int resCibil;
	private String resPan;
	private int resAadhar;
	private int resContact;
	private String resMail;
	public NewwResource(String resText, int resNum, int resCibil, String resPan, int resAadhar, int resContact,
			String resMail, String resAdd) {
		super();
		this.resText = resText;
		this.resNum = resNum;
		this.resCibil = resCibil;
		this.resPan = resPan;
		this.resAadhar = resAadhar;
		this.resContact = resContact;
		this.resMail = resMail;
		this.resAdd = resAdd;
	}
	public NewwResource() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String resAdd;
	public int getResId() {
		return resId;
	}
	public void setResId(int resId) {
		this.resId = resId;
	}
	public String getResText() {
		return resText;
	}
	public void setResText(String resText) {
		this.resText = resText;
	}
	public int getResNum() {
		return resNum;
	}
	public void setResNum(int resNum) {
		this.resNum = resNum;
	}
	public int getResCibil() {
		return resCibil;
	}
	public void setResCibil(int resCibil) {
		this.resCibil = resCibil;
	}
	public String getResPan() {
		return resPan;
	}
	public void setResPan(String resPan) {
		this.resPan = resPan;
	}
	public int getResAadhar() {
		return resAadhar;
	}
	public void setResAadhar(int resAadhar) {
		this.resAadhar = resAadhar;
	}
	public int getResContact() {
		return resContact;
	}
	public void setResContact(int resContact) {
		this.resContact = resContact;
	}
	public String getResMail() {
		return resMail;
	}
	public void setResMail(String resMail) {
		this.resMail = resMail;
	}
	public String getResAdd() {
		return resAdd;
	}
	public void setResAdd(String resAdd) {
		this.resAdd = resAdd;
	}
}