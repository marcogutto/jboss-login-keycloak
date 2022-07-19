package com.example;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Logout.
 */
public class CookieLogout extends HttpServlet {
    /**
     * Serialização.
     */
    private static final long serialVersionUID = 1L;
    
    private static final String PAGE_LOGIN = "home.jsf";
    
    public static final String PATH_COOKIE = "/";

    /**
     * Realiza o logout.
     *
     * @param request request.
     * @param response response.
     * @throws IOException Exception.
     * @throws ServletException ServletException.
     *
     */
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

//        HttpSession session = request.getSession(false);
        
//        request.logout();
        
//        if (session != null) {
//        	session.invalidate();
//        }
        
        this.removeCookies(request, response);
        
//        request.getRequestDispatcher(PAGE_LOGIN).forward(request, response);
    }
    
    /**
     * Remove uma lista de cookies referente a KEYCLOAK.
     *
     * @param parametro o parâmetro a ser removido
     * @param request o {@link HttpServletRequest}
     * @param response o {@link HttpServletResponse}
     */
	private void removeCookies(HttpServletRequest request, HttpServletResponse response) {
		
		Cookie[] cookies = request.getCookies();
		
		for (Cookie cookie : cookies) {
			System.out.println(cookie.getDomain()+" - "+cookie.getPath()+" - "+cookie.getName()+" - "+cookie.getValue());
		}
		
		if (cookies != null) {
//			String domain = recuperaDomainCookie();
//			String domain = ".br-petrobras.com.br";
			for (int i = 0; i < cookies.length; i++) {
//				if (cookies[i].getName().contains(parametro)) {
					cookies[i].setValue(null);
					cookies[i].setMaxAge(0);
					cookies[i].setPath(PATH_COOKIE);
//					cookies[i].setDomain(domain);
					response.addCookie(cookies[i]);
//				}
			}
		}
		
		
	}

}
