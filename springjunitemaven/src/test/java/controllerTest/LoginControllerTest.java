package controllerTest;

import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.sutin.controller.AppConfig;
import com.sutin.controller.LoginController;
import com.sutin.controller.LoginModel;
import com.sutin.daoimpl.CommonDao;
import com.sutin.util.ServletUtill;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {AppConfig.class})
public class LoginControllerTest {
	
	
	@Autowired
	LoginController loginController;
	
	@Autowired
	LoginModel loginModel;
	
	@Autowired
	public CommonDao commonDao;
	
	@Autowired
	ServletUtill servletUtill;
	
	@Test
	public void test() {
		// It will Create Mock Object
		LoginController login = mock(LoginController.class);
		// authenticate method Asign AS false 
		when(login.authenticate()).thenReturn( true);
		System.out.println(login.authenticate());
		assertEquals(login.authenticate(), false);
	//	loginController.msg();
	}

}
