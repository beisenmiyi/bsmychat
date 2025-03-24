package com.example.android

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Box(
                modifier = Modifier
                    .background(Color(0xffaaffaa))
                    .fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                LoginPage()
            }
        }
    }
}

@SuppressLint("RememberReturnType")
@Composable
fun LoginPage() {
    val textState = remember { mutableStateOf(TextFieldValue("")) }

    Text(
        text = "登录",
        fontSize = 24.sp
    )
    OutlinedTextField(
        value = textState.value,
        onValueChange = { textState.value = it },
        label = { Text("用户名") }, // 示例标签
        modifier = Modifier.padding(16.dp) // 示例修饰符
    )
}