import React, { ReactElement } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage = (): ReactElement => {
    return (
        <Row justify="center">
            <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                <Card title="Acessar">
                    <Form>
                        <Form.Item name="username">
                            <Input prefix={<UserOutlined />} placeholder="E-mail" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input prefix={<LockOutlined />} placeholder="Senha" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Entrar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default LoginPage;
