var searchIndex = {};
searchIndex['glfw'] = {"items":[[0,"","glfw","An ideomatic wrapper for the GLFW library."],[1,"ShowAliases","","Formats the type using aliases rather than the default variant names."],[1,"Callback","",""],[11,"f","","",0],[11,"data","","",0],[1,"VidMode","","Describes a single video mode."],[11,"width","","",1],[11,"height","","",1],[11,"red_bits","","",1],[11,"green_bits","","",1],[11,"blue_bits","","",1],[11,"refresh_rate","","",1],[1,"GammaRamp","","Describes the gamma ramp of a monitor."],[11,"red","","",2],[11,"green","","",2],[11,"blue","","",2],[1,"Glfw","","A token from which to call various GLFW functions. It can be obtained by\ncalling the `init` function. This cannot be sent to other tasks, and should\nonly be initialized on the main platform thread. Whilst this might make\nperforming some operations harder, this is to ensure thread safety is enforced\nstatically. The context can be safely cloned or implicitly copied if need be\nfor convenience."],[11,"no_send","","",3],[11,"no_share","","",3],[1,"Monitor","","A struct that wraps a `*GLFWmonitor` handle."],[11,"ptr","","",4],[11,"no_copy","","",4],[11,"no_send","","",4],[11,"no_share","","",4],[1,"Modifiers","","Key modifiers"],[11,"bits","","",5],[1,"FlushedMessages","","An iterator that yeilds until no more messages are contained in the\n`Receiver`'s queue."],[1,"Window","","A struct that wraps a `*GLFWwindow` handle."],[11,"ptr","","",6],[11,"glfw","","",6],[11,"is_shared","","",6],[11,"drop_sender","","A `Sender` that can be cloned out to child `RenderContext`s.",6],[11,"drop_receiver","","Once all  child`RenderContext`s have been dropped, calling `try_recv()`\non the `drop_receiver` will result in an `Err(std::comm::Disconnected)`,\nindicating that it is safe to drop the `Window`.",6],[1,"RenderContext","","A rendering context that can be shared between tasks."],[11,"ptr","","",7],[11,"drop_sender","","As long as this sender is alive, it is not safe to drop the parent\n`Window`.",7],[1,"Joystick","","A joystick handle."],[11,"id","","",8],[11,"glfw","","",8],[2,"Action","","Input actions."],[12,"Release","","",9],[12,"Press","","",9],[12,"Repeat","","",9],[2,"Key","","Input keys."],[12,"KeySpace","","",10],[12,"KeyApostrophe","","",10],[12,"KeyComma","","",10],[12,"KeyMinus","","",10],[12,"KeyPeriod","","",10],[12,"KeySlash","","",10],[12,"Key0","","",10],[12,"Key1","","",10],[12,"Key2","","",10],[12,"Key3","","",10],[12,"Key4","","",10],[12,"Key5","","",10],[12,"Key6","","",10],[12,"Key7","","",10],[12,"Key8","","",10],[12,"Key9","","",10],[12,"KeySemicolon","","",10],[12,"KeyEqual","","",10],[12,"KeyA","","",10],[12,"KeyB","","",10],[12,"KeyC","","",10],[12,"KeyD","","",10],[12,"KeyE","","",10],[12,"KeyF","","",10],[12,"KeyG","","",10],[12,"KeyH","","",10],[12,"KeyI","","",10],[12,"KeyJ","","",10],[12,"KeyK","","",10],[12,"KeyL","","",10],[12,"KeyM","","",10],[12,"KeyN","","",10],[12,"KeyO","","",10],[12,"KeyP","","",10],[12,"KeyQ","","",10],[12,"KeyR","","",10],[12,"KeyS","","",10],[12,"KeyT","","",10],[12,"KeyU","","",10],[12,"KeyV","","",10],[12,"KeyW","","",10],[12,"KeyX","","",10],[12,"KeyY","","",10],[12,"KeyZ","","",10],[12,"KeyLeftBracket","","",10],[12,"KeyBackslash","","",10],[12,"KeyRightBracket","","",10],[12,"KeyGraveAccent","","",10],[12,"KeyWorld1","","",10],[12,"KeyWorld2","","",10],[12,"KeyEscape","","",10],[12,"KeyEnter","","",10],[12,"KeyTab","","",10],[12,"KeyBackspace","","",10],[12,"KeyInsert","","",10],[12,"KeyDelete","","",10],[12,"KeyRight","","",10],[12,"KeyLeft","","",10],[12,"KeyDown","","",10],[12,"KeyUp","","",10],[12,"KeyPageUp","","",10],[12,"KeyPageDown","","",10],[12,"KeyHome","","",10],[12,"KeyEnd","","",10],[12,"KeyCapsLock","","",10],[12,"KeyScrollLock","","",10],[12,"KeyNumLock","","",10],[12,"KeyPrintScreen","","",10],[12,"KeyPause","","",10],[12,"KeyF1","","",10],[12,"KeyF2","","",10],[12,"KeyF3","","",10],[12,"KeyF4","","",10],[12,"KeyF5","","",10],[12,"KeyF6","","",10],[12,"KeyF7","","",10],[12,"KeyF8","","",10],[12,"KeyF9","","",10],[12,"KeyF10","","",10],[12,"KeyF11","","",10],[12,"KeyF12","","",10],[12,"KeyF13","","",10],[12,"KeyF14","","",10],[12,"KeyF15","","",10],[12,"KeyF16","","",10],[12,"KeyF17","","",10],[12,"KeyF18","","",10],[12,"KeyF19","","",10],[12,"KeyF20","","",10],[12,"KeyF21","","",10],[12,"KeyF22","","",10],[12,"KeyF23","","",10],[12,"KeyF24","","",10],[12,"KeyF25","","",10],[12,"KeyKp0","","",10],[12,"KeyKp1","","",10],[12,"KeyKp2","","",10],[12,"KeyKp3","","",10],[12,"KeyKp4","","",10],[12,"KeyKp5","","",10],[12,"KeyKp6","","",10],[12,"KeyKp7","","",10],[12,"KeyKp8","","",10],[12,"KeyKp9","","",10],[12,"KeyKpDecimal","","",10],[12,"KeyKpDivide","","",10],[12,"KeyKpMultiply","","",10],[12,"KeyKpSubtract","","",10],[12,"KeyKpAdd","","",10],[12,"KeyKpEnter","","",10],[12,"KeyKpEqual","","",10],[12,"KeyLeftShift","","",10],[12,"KeyLeftControl","","",10],[12,"KeyLeftAlt","","",10],[12,"KeyLeftSuper","","",10],[12,"KeyRightShift","","",10],[12,"KeyRightControl","","",10],[12,"KeyRightAlt","","",10],[12,"KeyRightSuper","","",10],[12,"KeyMenu","","",10],[2,"MouseButton","","Mouse buttons. The `MouseButtonLeft`, `MouseButtonRight`, and\n`MouseButtonMiddle` aliases are supplied for convenience."],[12,"MouseButton1","","The left mouse button. A `MouseButtonLeft` alias is provided to improve clarity.",11],[12,"MouseButton2","","The right mouse button. A `MouseButtonRight` alias is provided to improve clarity.",11],[12,"MouseButton3","","The middle mouse button. A `MouseButtonMiddle` alias is provided to improve clarity.",11],[12,"MouseButton4","","",11],[12,"MouseButton5","","",11],[12,"MouseButton6","","",11],[12,"MouseButton7","","",11],[12,"MouseButton8","","",11],[2,"Error","","Tokens corresponding to various error types."],[12,"NotInitialized","","",12],[12,"NoCurrentContext","","",12],[12,"InvalidEnum","","",12],[12,"InvalidValue","","",12],[12,"OutOfMemory","","",12],[12,"ApiUnavailable","","",12],[12,"VersionUnavailable","","",12],[12,"PlatformError","","",12],[12,"FormatUnavailable","","",12],[2,"CursorMode","","Cursor modes."],[12,"CursorNormal","","",13],[12,"CursorHidden","","",13],[12,"CursorDisabled","","",13],[2,"InitError","","An error that might be returned when `glfw::init` is called."],[12,"AlreadyInitialized","","The library was already initialized.",14],[12,"InternalInitError","","An internal error occured when trying to initialize the library.",14],[2,"MonitorEvent","","Monitor events."],[12,"Connected","","",15],[12,"Disconnected","","",15],[2,"WindowHint","","Window hints that can be set using the `window_hint` function."],[12,"RedBits","","Specifies the desired bit depth of the red component of the default framebuffer.",16],[12,"GreenBits","","Specifies the desired bit depth of the green component of the default framebuffer.",16],[12,"BlueBits","","Specifies the desired bit depth of the blue component of the default framebuffer.",16],[12,"AlphaBits","","Specifies the desired bit depth of the alpha component of the default framebuffer.",16],[12,"DepthBits","","Specifies the desired bit depth of the depth component of the default framebuffer.",16],[12,"StencilBits","","Specifies the desired bit depth of the stencil component of the default framebuffer.",16],[12,"AccumRedBits","","Specifies the desired bit depth of the red component of the accumulation framebuffer.",16],[12,"AccumGreenBits","","Specifies the desired bit depth of the green component of the accumulation framebuffer.",16],[12,"AccumBlueBits","","Specifies the desired bit depth of the blue component of the accumulation framebuffer.",16],[12,"AccumAlphaBits","","Specifies the desired bit depth of the alpha component of the accumulation framebuffer.",16],[12,"AuxBuffers","","Specifies the desired number of auxiliary buffers.",16],[12,"Stereo","","Specifies whether to use stereoscopic rendering.",16],[12,"Samples","","Specifies the desired number of samples to use for multisampling. Zero\ndisables multisampling.",16],[12,"SRgbCapable","","Specifies whether the framebuffer should be sRGB capable.",16],[12,"RefreshRate","","Specifies the desired refresh rate for full screen windows. If set to\nzero, the highest available refresh rate will be used.",16],[12,"ClientApi","","Specifies which `ClientApi` to create the context for.",16],[12,"ContextVersionMajor","","Specifies the major client API version that the created context must be\ncompatible with.",16],[12,"ContextVersionMinor","","Specifies the minor client API version that the created context must be\ncompatible with.",16],[12,"ContextVersion","","Specifies the client API version that the created context must be\ncompatible with. This is the same as successive calls to `window_hint`\nfunction with the `ContextVersionMajor` and `ContextVersionMinor` hints.",16],[12,"ContextRobustness","","Specifies the `ContextRobustness` strategy to be used.",16],[12,"OpenglForwardCompat","","Specifies whether the OpenGL context should be forward-compatible, i.e.\none where all functionality deprecated in the requested version of\nOpenGL is removed. This may only be used if the requested OpenGL version\nis 3.0 or above.",16],[12,"OpenglDebugContext","","Specifies whether to create a debug OpenGL context, which may have\nadditional error and performance issue reporting functionality.",16],[12,"OpenglProfile","","Specifies which OpenGL profile to create the context for. If requesting\nan OpenGL version below 3.2, `OpenGlAnyProfile` must be used.",16],[12,"Resizable","","Specifies whether the window will be resizable by the user. Even if this\nis set to `false`, the window can still be resized using the\n`Window::set_size` function.",16],[12,"Visible","","Specifies whether the window will be visible on creation.",16],[12,"Decorated","","Specifies whether the window will have platform-specific decorations\nsuch as a border, a close widget, etc.",16],[2,"ClientApi","","Client API tokens."],[12,"OpenGlApi","","",17],[12,"OpenGlEsApi","","",17],[2,"ContextRobustness","","Context robustness tokens."],[12,"NoRobustness","","",18],[12,"NoResetNotification","","",18],[12,"LoseContextOnReset","","",18],[2,"OpenGlProfile","","OpenGL profile tokens."],[12,"OpenGlAnyProfile","","",19],[12,"OpenGlCoreProfile","","",19],[12,"OpenGlCompatProfile","","",19],[2,"WindowMode","","Describes the mode of a window"],[12,"FullScreen","","Full screen mode. Contains the monitor on which the window is displayed.",20],[12,"Windowed","","Windowed mode.",20],[2,"WindowEvent","","Window event messages."],[12,"PosEvent","","",21],[12,"SizeEvent","","",21],[12,"CloseEvent","","",21],[12,"RefreshEvent","","",21],[12,"FocusEvent","","",21],[12,"IconifyEvent","","",21],[12,"FramebufferSizeEvent","","",21],[12,"MouseButtonEvent","","",21],[12,"CursorPosEvent","","",21],[12,"CursorEnterEvent","","",21],[12,"ScrollEvent","","",21],[12,"KeyEvent","","",21],[12,"CharEvent","","",21],[2,"JoystickId","","Joystick identifier tokens."],[12,"Joystick1","","",22],[12,"Joystick2","","",22],[12,"Joystick3","","",22],[12,"Joystick4","","",22],[12,"Joystick5","","",22],[12,"Joystick6","","",22],[12,"Joystick7","","",22],[12,"Joystick8","","",22],[12,"Joystick9","","",22],[12,"Joystick10","","",22],[12,"Joystick11","","",22],[12,"Joystick12","","",22],[12,"Joystick13","","",22],[12,"Joystick14","","",22],[12,"Joystick15","","",22],[12,"Joystick16","","",22],[3,"fail_on_errors","","The function to be used with the `FAIL_ON_ERRORS` callback."],[3,"log_errors","","The function to be used with the `LOG_ERRORS` callback."],[3,"init","","Initializes the GLFW library. This must be called on the main platform\nthread."],[3,"get_version","","Wrapper for `glfwGetVersion`."],[3,"get_version_string","","Wrapper for `glfwGetVersionString`."],[3,"flush_messages","","Returns an iterator that yeilds until no more messages are contained in the\n`Receiver`'s queue. This is useful for event handling where the blocking\nbehaviour of `Receiver::iter` is undesirable."],[3,"make_context_current","","Wrapper for `glfwMakeContextCurrent`."],[0,"ffi","","Low-level function bindings and constants pertaining to the underlying\nGLFW library."],[1,"GLFWgammaramp","glfw::ffi",""],[11,"red","","",23],[11,"green","","",23],[11,"blue","","",23],[11,"size","","",23],[1,"GLFWvidmode","",""],[11,"width","","",24],[11,"height","","",24],[11,"redBits","","",24],[11,"greenBits","","",24],[11,"blueBits","","",24],[11,"refreshRate","","",24],[2,"GLFWmonitor","",""],[2,"GLFWwindow","",""],[13,"glfwInit","",""],[13,"glfwTerminate","",""],[13,"glfwGetVersion","",""],[13,"glfwGetVersionString","",""],[13,"glfwSetErrorCallback","",""],[13,"glfwGetMonitors","",""],[13,"glfwGetPrimaryMonitor","",""],[13,"glfwGetMonitorPos","",""],[13,"glfwGetMonitorPhysicalSize","",""],[13,"glfwGetMonitorName","",""],[13,"glfwSetMonitorCallback","",""],[13,"glfwGetVideoModes","",""],[13,"glfwGetVideoMode","",""],[13,"glfwSetGamma","",""],[13,"glfwGetGammaRamp","",""],[13,"glfwSetGammaRamp","",""],[13,"glfwDefaultWindowHints","",""],[13,"glfwWindowHint","",""],[13,"glfwCreateWindow","",""],[13,"glfwDestroyWindow","",""],[13,"glfwWindowShouldClose","",""],[13,"glfwSetWindowShouldClose","",""],[13,"glfwSetWindowTitle","",""],[13,"glfwGetWindowPos","",""],[13,"glfwSetWindowPos","",""],[13,"glfwGetWindowSize","",""],[13,"glfwSetWindowSize","",""],[13,"glfwGetFramebufferSize","",""],[13,"glfwIconifyWindow","",""],[13,"glfwRestoreWindow","",""],[13,"glfwShowWindow","",""],[13,"glfwHideWindow","",""],[13,"glfwGetWindowMonitor","",""],[13,"glfwGetWindowAttrib","",""],[13,"glfwSetWindowUserPointer","",""],[13,"glfwGetWindowUserPointer","",""],[13,"glfwSetWindowPosCallback","",""],[13,"glfwSetWindowSizeCallback","",""],[13,"glfwSetWindowCloseCallback","",""],[13,"glfwSetWindowRefreshCallback","",""],[13,"glfwSetWindowFocusCallback","",""],[13,"glfwSetWindowIconifyCallback","",""],[13,"glfwSetFramebufferSizeCallback","",""],[13,"glfwPollEvents","",""],[13,"glfwWaitEvents","",""],[13,"glfwGetInputMode","",""],[13,"glfwSetInputMode","",""],[13,"glfwGetKey","",""],[13,"glfwGetMouseButton","",""],[13,"glfwGetCursorPos","",""],[13,"glfwSetCursorPos","",""],[13,"glfwSetKeyCallback","",""],[13,"glfwSetCharCallback","",""],[13,"glfwSetMouseButtonCallback","",""],[13,"glfwSetCursorPosCallback","",""],[13,"glfwSetCursorEnterCallback","",""],[13,"glfwSetScrollCallback","",""],[13,"glfwJoystickPresent","",""],[13,"glfwGetJoystickAxes","",""],[13,"glfwGetJoystickButtons","",""],[13,"glfwGetJoystickName","",""],[13,"glfwSetClipboardString","",""],[13,"glfwGetClipboardString","",""],[13,"glfwGetTime","",""],[13,"glfwSetTime","",""],[13,"glfwMakeContextCurrent","",""],[13,"glfwGetCurrentContext","",""],[13,"glfwSwapBuffers","",""],[13,"glfwSwapInterval","",""],[13,"glfwExtensionSupported","",""],[13,"glfwGetProcAddress","",""],[13,"glfwGetCocoaWindow","",""],[13,"glfwGetNSGLContext","",""],[4,"GLFWglproc","",""],[4,"GLFWerrorfun","",""],[4,"GLFWwindowposfun","",""],[4,"GLFWwindowsizefun","",""],[4,"GLFWwindowclosefun","",""],[4,"GLFWwindowrefreshfun","",""],[4,"GLFWwindowfocusfun","",""],[4,"GLFWwindowiconifyfun","",""],[4,"GLFWframebuffersizefun","",""],[4,"GLFWmousebuttonfun","",""],[4,"GLFWcursorposfun","",""],[4,"GLFWcursorenterfun","",""],[4,"GLFWscrollfun","",""],[4,"GLFWkeyfun","",""],[4,"GLFWcharfun","",""],[4,"GLFWmonitorfun","",""],[5,"FALSE","",""],[5,"TRUE","",""],[5,"RELEASE","",""],[5,"PRESS","",""],[5,"REPEAT","",""],[5,"KEY_SPACE","",""],[5,"KEY_APOSTROPHE","",""],[5,"KEY_COMMA","",""],[5,"KEY_MINUS","",""],[5,"KEY_PERIOD","",""],[5,"KEY_SLASH","",""],[5,"KEY_0","",""],[5,"KEY_1","",""],[5,"KEY_2","",""],[5,"KEY_3","",""],[5,"KEY_4","",""],[5,"KEY_5","",""],[5,"KEY_6","",""],[5,"KEY_7","",""],[5,"KEY_8","",""],[5,"KEY_9","",""],[5,"KEY_SEMICOLON","",""],[5,"KEY_EQUAL","",""],[5,"KEY_A","",""],[5,"KEY_B","",""],[5,"KEY_C","",""],[5,"KEY_D","",""],[5,"KEY_E","",""],[5,"KEY_F","",""],[5,"KEY_G","",""],[5,"KEY_H","",""],[5,"KEY_I","",""],[5,"KEY_J","",""],[5,"KEY_K","",""],[5,"KEY_L","",""],[5,"KEY_M","",""],[5,"KEY_N","",""],[5,"KEY_O","",""],[5,"KEY_P","",""],[5,"KEY_Q","",""],[5,"KEY_R","",""],[5,"KEY_S","",""],[5,"KEY_T","",""],[5,"KEY_U","",""],[5,"KEY_V","",""],[5,"KEY_W","",""],[5,"KEY_X","",""],[5,"KEY_Y","",""],[5,"KEY_Z","",""],[5,"KEY_LEFT_BRACKET","",""],[5,"KEY_BACKSLASH","",""],[5,"KEY_RIGHT_BRACKET","",""],[5,"KEY_GRAVE_ACCENT","",""],[5,"KEY_WORLD_1","",""],[5,"KEY_WORLD_2","",""],[5,"KEY_ESCAPE","",""],[5,"KEY_ENTER","",""],[5,"KEY_TAB","",""],[5,"KEY_BACKSPACE","",""],[5,"KEY_INSERT","",""],[5,"KEY_DELETE","",""],[5,"KEY_RIGHT","",""],[5,"KEY_LEFT","",""],[5,"KEY_DOWN","",""],[5,"KEY_UP","",""],[5,"KEY_PAGE_UP","",""],[5,"KEY_PAGE_DOWN","",""],[5,"KEY_HOME","",""],[5,"KEY_END","",""],[5,"KEY_CAPS_LOCK","",""],[5,"KEY_SCROLL_LOCK","",""],[5,"KEY_NUM_LOCK","",""],[5,"KEY_PRINT_SCREEN","",""],[5,"KEY_PAUSE","",""],[5,"KEY_F1","",""],[5,"KEY_F2","",""],[5,"KEY_F3","",""],[5,"KEY_F4","",""],[5,"KEY_F5","",""],[5,"KEY_F6","",""],[5,"KEY_F7","",""],[5,"KEY_F8","",""],[5,"KEY_F9","",""],[5,"KEY_F10","",""],[5,"KEY_F11","",""],[5,"KEY_F12","",""],[5,"KEY_F13","",""],[5,"KEY_F14","",""],[5,"KEY_F15","",""],[5,"KEY_F16","",""],[5,"KEY_F17","",""],[5,"KEY_F18","",""],[5,"KEY_F19","",""],[5,"KEY_F20","",""],[5,"KEY_F21","",""],[5,"KEY_F22","",""],[5,"KEY_F23","",""],[5,"KEY_F24","",""],[5,"KEY_F25","",""],[5,"KEY_KP_0","",""],[5,"KEY_KP_1","",""],[5,"KEY_KP_2","",""],[5,"KEY_KP_3","",""],[5,"KEY_KP_4","",""],[5,"KEY_KP_5","",""],[5,"KEY_KP_6","",""],[5,"KEY_KP_7","",""],[5,"KEY_KP_8","",""],[5,"KEY_KP_9","",""],[5,"KEY_KP_DECIMAL","",""],[5,"KEY_KP_DIVIDE","",""],[5,"KEY_KP_MULTIPLY","",""],[5,"KEY_KP_SUBTRACT","",""],[5,"KEY_KP_ADD","",""],[5,"KEY_KP_ENTER","",""],[5,"KEY_KP_EQUAL","",""],[5,"KEY_LEFT_SHIFT","",""],[5,"KEY_LEFT_CONTROL","",""],[5,"KEY_LEFT_ALT","",""],[5,"KEY_LEFT_SUPER","",""],[5,"KEY_RIGHT_SHIFT","",""],[5,"KEY_RIGHT_CONTROL","",""],[5,"KEY_RIGHT_ALT","",""],[5,"KEY_RIGHT_SUPER","",""],[5,"KEY_MENU","",""],[5,"KEY_LAST","",""],[5,"MOD_SHIFT","",""],[5,"MOD_CONTROL","",""],[5,"MOD_ALT","",""],[5,"MOD_SUPER","",""],[5,"JOYSTICK_1","",""],[5,"JOYSTICK_2","",""],[5,"JOYSTICK_3","",""],[5,"JOYSTICK_4","",""],[5,"JOYSTICK_5","",""],[5,"JOYSTICK_6","",""],[5,"JOYSTICK_7","",""],[5,"JOYSTICK_8","",""],[5,"JOYSTICK_9","",""],[5,"JOYSTICK_10","",""],[5,"JOYSTICK_11","",""],[5,"JOYSTICK_12","",""],[5,"JOYSTICK_13","",""],[5,"JOYSTICK_14","",""],[5,"JOYSTICK_15","",""],[5,"JOYSTICK_16","",""],[5,"JOYSTICK_LAST","",""],[5,"MOUSE_BUTTON_1","",""],[5,"MOUSE_BUTTON_2","",""],[5,"MOUSE_BUTTON_3","",""],[5,"MOUSE_BUTTON_4","",""],[5,"MOUSE_BUTTON_5","",""],[5,"MOUSE_BUTTON_6","",""],[5,"MOUSE_BUTTON_7","",""],[5,"MOUSE_BUTTON_8","",""],[5,"MOUSE_BUTTON_LEFT","",""],[5,"MOUSE_BUTTON_RIGHT","",""],[5,"MOUSE_BUTTON_MIDDLE","",""],[5,"MOUSE_BUTTON_LAST","",""],[5,"NOT_INITIALIZED","",""],[5,"NO_CURRENT_CONTEXT","",""],[5,"INVALID_ENUM","",""],[5,"INVALID_VALUE","",""],[5,"OUT_OF_MEMORY","",""],[5,"API_UNAVAILABLE","",""],[5,"VERSION_UNAVAILABLE","",""],[5,"PLATFORM_ERROR","",""],[5,"FORMAT_UNAVAILABLE","",""],[5,"FOCUSED","",""],[5,"ICONIFIED","",""],[5,"RESIZABLE","",""],[5,"VISIBLE","",""],[5,"DECORATED","",""],[5,"RED_BITS","",""],[5,"GREEN_BITS","",""],[5,"BLUE_BITS","",""],[5,"ALPHA_BITS","",""],[5,"DEPTH_BITS","",""],[5,"STENCIL_BITS","",""],[5,"ACCUM_RED_BITS","",""],[5,"ACCUM_GREEN_BITS","",""],[5,"ACCUM_BLUE_BITS","",""],[5,"ACCUM_ALPHA_BITS","",""],[5,"AUX_BUFFERS","",""],[5,"STEREO","",""],[5,"SAMPLES","",""],[5,"SRGB_CAPABLE","",""],[5,"REFRESH_RATE","",""],[5,"CLIENT_API","",""],[5,"CONTEXT_VERSION_MAJOR","",""],[5,"CONTEXT_VERSION_MINOR","",""],[5,"CONTEXT_REVISION","",""],[5,"CONTEXT_ROBUSTNESS","",""],[5,"OPENGL_FORWARD_COMPAT","",""],[5,"OPENGL_DEBUG_CONTEXT","",""],[5,"OPENGL_PROFILE","",""],[5,"OPENGL_API","",""],[5,"OPENGL_ES_API","",""],[5,"NO_ROBUSTNESS","",""],[5,"NO_RESET_NOTIFICATION","",""],[5,"LOSE_CONTEXT_ON_RESET","",""],[5,"OPENGL_ANY_PROFILE","",""],[5,"OPENGL_CORE_PROFILE","",""],[5,"OPENGL_COMPAT_PROFILE","",""],[5,"CURSOR","",""],[5,"STICKY_KEYS","",""],[5,"STICKY_MOUSE_BUTTONS","",""],[5,"CURSOR_NORMAL","",""],[5,"CURSOR_HIDDEN","",""],[5,"CURSOR_DISABLED","",""],[5,"CONNECTED","",""],[5,"DISCONNECTED","",""],[4,"ErrorCallback","glfw","An error callback. This can be supplied with some user data to be passed to\nthe callback function when it is triggered."],[4,"GLProc","","An OpenGL process address."],[4,"MonitorCallback","","An monitor callback. This can be supplied with some user data to be passed\nto the callback function when it is triggered."],[4,"Scancode","",""],[5,"FAIL_ON_ERRORS","","A callback that triggers a task failure when an error is encountered."],[5,"LOG_ERRORS","","A callback that logs each error as it is encountered without triggering a\ntask failure."],[5,"Shift","",""],[5,"Control","",""],[5,"Alt","",""],[5,"Super","",""],[6,"Context","","Methods common to renderable contexts"],[9,"window_ptr","","Returns the pointer to the underlying `GLFWwindow`.",25],[10,"swap_buffers","","Swaps the front and back buffers of the window. If the swap interval is\ngreater than zero, the GPU driver waits the specified number of screen\nupdates before swapping the buffers.",25],[10,"is_current","","Returns `true` if the window is the current context.",25],[10,"make_current","","Wrapper for `glfwMakeContextCurrent`",25],[10,"fmt","","",9],[10,"eq","","",9],[10,"ne","","",9],[10,"hash","","",9],[10,"clone","","",9],[10,"fmt","","",10],[10,"eq","","",10],[10,"ne","","",10],[10,"hash","","",10],[10,"clone","","",10],[10,"fmt","","",11],[10,"eq","","",11],[10,"ne","","",11],[10,"hash","","",11],[10,"clone","","",11],[10,"fmt","","",26],[10,"fmt","","",12],[10,"eq","","",12],[10,"ne","","",12],[10,"hash","","",12],[10,"clone","","",12],[10,"fmt","","",13],[10,"eq","","",13],[10,"ne","","",13],[10,"hash","","",13],[10,"clone","","",13],[10,"clone","","",3],[10,"fmt","","",14],[10,"eq","","",14],[10,"ne","","",14],[10,"set_error_callback","","Sets the error callback, overwriting the previous one stored.",3],[10,"set_monitor_callback","","Sets the monitor callback, overwriting the previous one stored.",3],[10,"with_primary_monitor","","Supplies the primary monitor to the closure provided, if it exists.\nThis is usually the monitor where elements like the Windows task bar or\nthe OS X menu bar is located.",3],[10,"with_connected_monitors","","Supplies a vector of the currently connected monitors to the closure\nprovided.",3],[10,"window_hint","","This is used to set the window hints for the next call to\n`Glfw::create_window`. The hints can be reset to their default values\nusing calling the `Glfw::default_window_hints` function.",3],[10,"default_window_hints","","Resets the window hints previously set by the `window_hint` function to\ntheir default values.",3],[10,"create_window","","Creates a new window.",3],[10,"make_context_current","","Makes the context of the specified window current. If no window is given\nthen the current context is detached.",3],[10,"poll_events","","Immediately process the received events.",3],[10,"wait_events","","Sleep until at least one event has been recieved, and then perform the\nequivalent of `Glfw::poll_events`.",3],[10,"get_time","","Returns the current value of the GLFW timer. Unless the timer has been\nset using `glfw::set_time`, the timer measures time elapsed since GLFW\nwas initialized.",3],[10,"set_time","","Sets the value of the GLFW timer.",3],[10,"set_swap_interval","","Sets the number of screen updates to wait before swapping the buffers of\nthe current context and returning from `Window::swap_buffers`.",3],[10,"extension_supported","","Returns `true` if the specified OpenGL or context creation API extension\nis supported by the current context.",3],[10,"get_proc_address","","Returns the address of the specified client API or extension function\nif it is supported by the current context.",3],[10,"get_joystick","","Constructs a `Joystick` handle corresponding to the supplied `JoystickId`.",3],[10,"get_pos","","Wrapper for `glfwGetMonitorPos`.",4],[10,"get_physical_size","","Wrapper for `glfwGetMonitorPhysicalSize`.",4],[10,"get_name","","Wrapper for `glfwGetMonitorName`.",4],[10,"get_video_modes","","Wrapper for `glfwGetVideoModes`.",4],[10,"get_video_mode","","Wrapper for `glfwGetVideoMode`.",4],[10,"set_gamma","","Wrapper for `glfwSetGamma`.",4],[10,"get_gamma_ramp","","Wrapper for `glfwGetGammaRamp`.",4],[10,"set_gamma_ramp","","Wrapper for `glfwSetGammaRamp`.",4],[10,"fmt","","Returns a string representation of the video mode.",1],[10,"fmt","","",17],[10,"eq","","",17],[10,"ne","","",17],[10,"clone","","",17],[10,"fmt","","",18],[10,"eq","","",18],[10,"ne","","",18],[10,"clone","","",18],[10,"fmt","","",19],[10,"eq","","",19],[10,"ne","","",19],[10,"clone","","",19],[10,"clone","","",5],[10,"eq","","",5],[10,"ne","","",5],[10,"hash","","",5],[10,"empty","","Returns an empty set of flags.",5],[10,"all","","Returns the set containing all flags.",5],[10,"bits","","Returns the raw value of the flags currently stored.",5],[10,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",5],[10,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",5],[10,"is_empty","","Returns `true` if no flags are currently stored.",5],[10,"is_all","","Returns `true` if all flags are currently set.",5],[10,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",5],[10,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",5],[10,"insert","","Inserts the specified flags in-place.",5],[10,"remove","","Removes the specified flags in-place.",5],[10,"bitor","","Returns the union of the two sets of flags.",5],[10,"bitand","","Returns the intersection between the two sets of flags.",5],[10,"sub","","Returns the set difference of the two sets of flags.",5],[10,"not","","Returns the complement of this set of flags.",5],[10,"fmt","","",5],[10,"clone","","",21],[10,"fmt","","",21],[10,"next","","",27],[10,"create_shared","","Wrapper for `glfwCreateWindow`.",6],[10,"close","","Calling this method forces the destructor to be called, closing the\nwindow.",6],[10,"render_context","","Returns a render context that can be shared between tasks, allowing\nfor concurrent rendering.",6],[10,"should_close","","Wrapper for `glfwWindowShouldClose`.",6],[10,"set_should_close","","Wrapper for `glfwSetWindowShouldClose`.",6],[10,"set_title","","Sets the title of the window.",6],[10,"get_pos","","Wrapper for `glfwGetWindowPos`.",6],[10,"set_pos","","Wrapper for `glfwSetWindowPos`.",6],[10,"get_size","","Wrapper for `glfwGetWindowSize`.",6],[10,"set_size","","Wrapper for `glfwSetWindowSize`.",6],[10,"get_framebuffer_size","","Wrapper for `glfwGetFramebufferSize`.",6],[10,"iconify","","Wrapper for `glfwIconifyWindow`.",6],[10,"restore","","Wrapper for `glfwRestoreWindow`.",6],[10,"show","","Wrapper for `glfwShowWindow`.",6],[10,"hide","","Wrapper for `glfwHideWindow`.",6],[10,"with_window_mode","","Returns whether the window is fullscreen or windowed.",6],[10,"is_focused","","Wrapper for `glfwGetWindowAttrib` called with `FOCUSED`.",6],[10,"is_iconified","","Wrapper for `glfwGetWindowAttrib` called with `ICONIFIED`.",6],[10,"get_client_api","","Wrapper for `glfwGetWindowAttrib` called with `CLIENT_API`.",6],[10,"get_context_version","","Wrapper for `glfwGetWindowAttrib` called with\n`CONTEXT_VERSION_MAJOR`, `CONTEXT_VERSION_MINOR` and `CONTEXT_REVISION`.",6],[10,"get_context_robustness","","Wrapper for `glfwGetWindowAttrib` called with `CONTEXT_ROBUSTNESS`.",6],[10,"is_opengl_forward_compat","","Wrapper for `glfwGetWindowAttrib` called with `OPENGL_FORWARD_COMPAT`.",6],[10,"is_opengl_debug_context","","Wrapper for `glfwGetWindowAttrib` called with `OPENGL_DEBUG_CONTEXT`.",6],[10,"get_opengl_profile","","Wrapper for `glfwGetWindowAttrib` called with `OPENGL_PROFILE`.",6],[10,"is_resizable","","Wrapper for `glfwGetWindowAttrib` called with `RESIZABLE`.",6],[10,"is_visible","","Wrapper for `glfwGetWindowAttrib` called with `VISIBLE`.",6],[10,"is_decorated","","Wrapper for `glfwGetWindowAttrib` called with `DECORATED`.",6],[10,"set_pos_polling","","Wrapper for `glfwSetWindowPosCallback`.",6],[10,"set_all_polling","","",6],[10,"set_size_polling","","Wrapper for `glfwSetWindowSizeCallback`.",6],[10,"set_close_polling","","Wrapper for `glfwSetWindowCloseCallback`.",6],[10,"set_refresh_polling","","Wrapper for `glfwSetWindowRefreshCallback`.",6],[10,"set_focus_polling","","Wrapper for `glfwSetWindowFocusCallback`.",6],[10,"set_iconify_polling","","Wrapper for `glfwSetWindowIconifyCallback`.",6],[10,"set_framebuffer_size_polling","","Wrapper for `glfwSetFramebufferSizeCallback`.",6],[10,"get_cursor_mode","","Wrapper for `glfwGetInputMode` called with `CURSOR`.",6],[10,"set_cursor_mode","","Wrapper for `glfwSetInputMode` called with `CURSOR`.",6],[10,"has_sticky_keys","","Wrapper for `glfwGetInputMode` called with `STICKY_KEYS`.",6],[10,"set_sticky_keys","","Wrapper for `glfwSetInputMode` called with `STICKY_KEYS`.",6],[10,"has_sticky_mouse_buttons","","Wrapper for `glfwGetInputMode` called with `STICKY_MOUSE_BUTTONS`.",6],[10,"set_sticky_mouse_buttons","","Wrapper for `glfwSetInputMode` called with `STICKY_MOUSE_BUTTONS`.",6],[10,"get_key","","Wrapper for `glfwGetKey`.",6],[10,"get_mouse_button","","Wrapper for `glfwGetMouseButton`.",6],[10,"get_cursor_pos","","Wrapper for `glfwGetCursorPos`.",6],[10,"set_cursor_pos","","Wrapper for `glfwSetCursorPos`.",6],[10,"set_key_polling","","Wrapper for `glfwSetKeyCallback`.",6],[10,"set_char_polling","","Wrapper for `glfwSetCharCallback`.",6],[10,"set_mouse_button_polling","","Wrapper for `glfwSetMouseButtonCallback`.",6],[10,"set_cursor_pos_polling","","Wrapper for `glfwSetCursorPosCallback`.",6],[10,"set_cursor_enter_polling","","Wrapper for `glfwSetCursorEnterCallback`.",6],[10,"set_scroll_polling","","Wrapper for `glfwSetScrollCallback`.",6],[10,"set_clipboard_string","","Wrapper for `glfwGetClipboardString`.",6],[10,"get_clipboard_string","","Wrapper for `glfwGetClipboardString`.",6],[10,"get_cocoa_window","","Wrapper for `glfwGetCocoaWindow`",6],[10,"get_nsgl_context","","Wrapper for `glfwGetNSGLContext`",6],[10,"drop","","Closes the window and performs the necessary cleanups. This will block\nuntil all associated `RenderContext`s were also dropped, and emit a\n`debug!` message to that effect.",6],[10,"window_ptr","","",6],[10,"window_ptr","","",7],[10,"fmt","","",22],[10,"hash","","",22],[10,"eq","","",22],[10,"ne","","",22],[10,"clone","","",22],[10,"is_present","","Wrapper for `glfwJoystickPresent`.",8],[10,"get_axes","","Wrapper for `glfwGetJoystickAxes`.",8],[10,"get_buttons","","Wrapper for `glfwGetJoystickButtons`.",8],[10,"get_name","","Wrapper for `glfwGetJoystickName`.",8]],"paths":[[1,"Callback"],[1,"VidMode"],[1,"GammaRamp"],[1,"Glfw"],[1,"Monitor"],[1,"Modifiers"],[1,"Window"],[1,"RenderContext"],[1,"Joystick"],[2,"Action"],[2,"Key"],[2,"MouseButton"],[2,"Error"],[2,"CursorMode"],[2,"InitError"],[2,"MonitorEvent"],[2,"WindowHint"],[2,"ClientApi"],[2,"ContextRobustness"],[2,"OpenGlProfile"],[2,"WindowMode"],[2,"WindowEvent"],[2,"JoystickId"],[1,"GLFWgammaramp"],[1,"GLFWvidmode"],[6,"Context"],[1,"ShowAliases"],[1,"FlushedMessages"]]};
initSearch(searchIndex);